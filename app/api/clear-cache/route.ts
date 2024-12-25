import { NextResponse } from "next/server";
import axios from "axios";
import { revalidatePath } from "next/cache";


export async function GET(req: Request) {
  const pathsToRevalidate = ["/", "/guide", "/blog", "/about", "/privacy-policy"];
  let cleared = [];

  try {
    // Revalidate static paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path);
      cleared.push(path);
    }

    // Fetch dynamic paths from the API
    try {
      const full_path = `${process.env.NEXT_PUBLIC_API_ENDPOINT}travel_blogs?fields=slug&pagination[limit]=1000`
      const response = await axios.get(
        full_path,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, // Add Bearer token here
          },
        }
      );
      // Revalidate dynamic paths
      if (response?.data?.data) {
        response.data.data.forEach((item: { slug: string }) => {
          const dynamicPath = `/guide/${item.slug}`;
          revalidatePath(dynamicPath);
          cleared.push(dynamicPath);
        });
      }
    } catch (error) {
      console.error("Error fetching dynamic paths:", error);
    }

    // Return success response with revalidated paths
    return NextResponse.json({ cleared });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json({ error: "Error revalidating" }, { status: 500 });
  }
}
