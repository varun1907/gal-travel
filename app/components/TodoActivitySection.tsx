import React from "react";
import ProTip from "./ProTip";
import _ from "lodash";
import constant from "../../config/constant";
import Image from "next/image";

const TodoActivitySection = ({ activity }: any) => {
  const todo_list = activity?.activity_to_do_list;
  return (
    <section className="pt-8 md:pt-12 gap-8 md:gap-16" id="to-do">
      <div
        style={{ height: 41, backgroundColor: "#E7BFBF" }}
        className="flex items-center pl-6"
      >
        <p className="font-redHat font-bold text-base">What To Do</p>
      </div>

      <div>
        {todo_list.map((todo_item: any, todo_index: number) => (
          <div key={`todoitem_${todo_index}`} className="mt-4 md:mt-16">
            <div className="flex flex-col-reverse md:flex-row md:items-center mb-3">
              <div
                className="mt-2 md:mt-0"
                style={{ height: 2, backgroundColor: "#EAD5C4", width: 163 }}
              ></div>
              <p className="font-bold font-redHat pl-1 md:pl-6 text-xl">{`${todo_item?.activities_to_do_id?.to_do_title}`}</p>
            </div>
            <div className="mx-4 md:mx-48">
              <p
                className="font-redHat font-medium text-base mt-5"
                dangerouslySetInnerHTML={{
                  __html: todo_item?.activities_to_do_id?.to_do_content || "",
                }}
              ></p>

              {todo_item?.activities_to_do_id?.to_do_image_1_big
                ?.filename_disk && (
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 mt-4">
                  <div className="md:col-span-1 overflow-hidden relative w-full h-[200px] md:h-[342px] object-cover">
                    <Image
                      src={`${constant.REMOTE_IMAGE_ENDPOINT}${todo_item?.activities_to_do_id?.to_do_image_1_big?.filename_disk}`}
                      alt="Image 1"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="grid grid-rows-2 gap-3">
                    <div className="overflow-hidden relative w-full h-[200px] md:h-[180px] object-cover">
                      <Image
                        src={`${constant.REMOTE_IMAGE_ENDPOINT}${todo_item?.activities_to_do_id?.to_do_image_2?.filename_disk}`}
                        alt="Image 2"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="overflow-hidden relative w-full h-[200px] md:h-[150px] object-cover">
                      <Image
                        src={`${constant.REMOTE_IMAGE_ENDPOINT}${todo_item?.activities_to_do_id?.to_do_image_3?.filename_disk}`}
                        alt="Image 3"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {!_.isEmpty(todo_item?.activities_to_do_id?.to_do_pro_tip) &&
                !_.isEmpty(
                  todo_item?.activities_to_do_id?.to_do_pro_tip_content
                ) && (
                  <ProTip
                    city_name={""}
                    title={
                      todo_item?.activities_to_do_id?.to_do_pro_tip_content
                    }
                    image={
                      todo_item?.activities_to_do_id?.to_do_pro_tip
                        ?.filename_disk
                    }
                  />
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TodoActivitySection;
