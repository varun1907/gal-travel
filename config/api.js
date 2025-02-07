const API = {
  travel_blogs: "travel_blogs",
  home_page: "home_page",
  privacy_policy: "privacy_policy",
  about_us: "about_us",
  subscriber_emails: "subscriber_emails",
  footer: "footer",
  travel_quotes: "travel_quotes",
  normal_blogs: "normal_blogs",
  blogs_guides_listing_banners: "blogs_guides_listing_banners",
};

const fireApiAction = async (url, method = "GET", data = {}) => {
  try {
    method = method.toUpperCase();

    const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const completeURL =
      method === "GET"
        ? `${baseUrl}${url}?${new URLSearchParams(data).toString()}`
        : `${baseUrl}${url}`;
    const res = await fetch(completeURL, {
      method,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
      ...(method !== "GET" && { body: JSON.stringify(data) }),
    });
    const parsedRes = await res.json();
    return parsedRes;
  } catch (error) {
    throw error.response.data;
  }
};
export { API, fireApiAction };
