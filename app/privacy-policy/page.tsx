import { API, fireApiAction } from "@/config/api";

async function fetchPrivacyPolicy() {
  const params = {
    "filter[status][_eq]": "published",
  };

  try {
    const result = await fireApiAction(API.privacy_policy, "GET", params);

    if (result?.data) {
      return result.data;
    }
    throw new Error("Not Found");
  } catch (error) {
    return null;
  }
}

export default async function PrivacyPolicy() {
  let policy = await fetchPrivacyPolicy();
  let content = policy?.privacy_policy_content;
  content = content?.replaceAll("\n", "<br/>");

  return (
    <div className="privacy-policy-page">
      <div
        className="banner relative  h-64 md:h-96 flex items-center justify-center"
        style={{ backgroundColor: "#EDE8E2" }}
      >
        <p
          className="text-4xl md:text-6xl font-ragilac"
          style={{ color: "#C95C5C" }}
        >
          Privacy Policy
        </p>
      </div>

      <div className="content-container max-w-4xl mx-auto px-6 md:px-8 py-10 text-gray-800">
        <p
          className="font-redHat text-sm md:text-base leading-6 mb-6 rich_text_links"
          dangerouslySetInnerHTML={{
            // __html: policy?.privacy_policy_content || "",
            __html: content || "",
          }}
        ></p>
      </div>
    </div>
  );
}
