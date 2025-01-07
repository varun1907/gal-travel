import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  // Static paths
  const staticPaths = ["/", "/about", "/privacy-policy", "/guide", "/blog"];

  const dynamicPath: string[] = [];

  const full_path = `${process.env.NEXT_PUBLIC_API_ENDPOINT}travel_blogs?fields=slug&pagination[limit]=1000`;
  const full_path_blogs = `${process.env.NEXT_PUBLIC_API_ENDPOINT}normal_blogs?fields=slug&pagination[limit]=1000`;
  const response = await axios.get(full_path, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, // Add Bearer token here
    },
  });

  if (response?.data?.data) {
    response.data.data.forEach((item: { slug: string }) => {
      dynamicPath.push(`/guide/${item.slug}`);
    });
  }

  const response_blog = await axios.get(full_path_blogs, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`, // Add Bearer token here
    },
  });

  if (response_blog?.data?.data) {
    response_blog.data.data.forEach((item: { slug: string }) => {
      dynamicPath.push(`/blog/${item.slug}`);
    });
  }

  const allPaths = [...staticPaths, ...dynamicPath];

  const sitemapContent = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((path) => {
          return `
          <url>
            <loc>${process.env.NEXT_PUBLIC_HOSTNAME}${path}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `;
        })
        .join("\n")}
    </urlset>
  `.trim();

  return new NextResponse(sitemapContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
