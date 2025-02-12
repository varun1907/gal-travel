import { NextResponse } from "next/server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  "use server"; // ✅ Ensures server action compatibility

  const pathsToRevalidate = [
    "/",
    "/guide",
    "/blog",
    "/about",
    "/privacy-policy",
  ];
  const cleared: string[] = [];
  const errors: { path?: string; error: string }[] = [];

  try {
    // Revalidate static paths
    for (const path of pathsToRevalidate) {
      try {
        revalidatePath(path);
        cleared.push(path);
      } catch (err: any) {
        console.error(`Failed to revalidate path: ${path}`, err);
        errors.push({ path, error: String(err) });
      }
    }

    // ✅ Fetch dynamic paths and revalidate them
    try {
      const full_path = `${process.env.NEXT_PUBLIC_API_ENDPOINT}travel_blogs?fields=slug&pagination[limit]=1000`;
      const response = await axios.get(full_path, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
      });

      if (response?.data?.data) {
        for (const item of response.data.data) {
          const dynamicPath = `/guide/${item.slug}`;
          try {
            revalidatePath(dynamicPath);
            cleared.push(dynamicPath);
          } catch (err: any) {
            console.error(`Failed to revalidate path: ${dynamicPath}`, err);
            errors.push({ path: dynamicPath, error: String(err) });
          }
        }
      }

      const full_path_blog = `${process.env.NEXT_PUBLIC_API_ENDPOINT}normal_blogs?fields=slug&pagination[limit]=1000`;
      const response_blog = await axios.get(full_path_blog, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
      });

      if (response_blog?.data?.data) {
        for (const item of response_blog.data.data) {
          const dynamicPath = `/blog/${item.slug}`;
          try {
            revalidatePath(dynamicPath);
            cleared.push(dynamicPath);
          } catch (err: any) {
            console.error(`Failed to revalidate path: ${dynamicPath}`, err);
            errors.push({ path: dynamicPath, error: String(err) });
          }
        }
      }
    } catch (error) {
      console.error("Error fetching dynamic paths:", error);
      errors.push({ error: "Failed to fetch dynamic paths" });
    }

    // ✅ Return the revalidation result
    return NextResponse.json({ cleared, errors });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Error during revalidation process" },
      { status: 500 }
    );
  }
}
