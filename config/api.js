import axios from "axios";

const API = {
  travel_blogs: "travel_blogs",
  home_page: "home_page",
  privacy_policy: "privacy_policy",
  about_us: "about_us",
  subscriber_emails: "subscriber_emails",
  footer: "footer",
  travel_quotes: "travel_quotes",
  normal_blogs: "normal_blogs",
};

const axioInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

axioInstance.interceptors.request.use((request) => {
  request.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`;
  return request;
});

const fireApiAction = async (url, method = "GET", data = {}) => {
  try {
    method = method.toLowerCase();
    let allData = {
      url,
      method,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        Pragma: "no-cache",
        Expires: "0",
      },
    };
    if (method === "get") {
      allData["params"] = data;
    } else if (method === "post") {
      allData["data"] = data;
    } else if (method === "patch" || method === "put" || method === "delete") {
      let updateId = data.id;
      if (method !== "delete") delete data.id;
      url = [url, updateId];
      allData["data"] = data;
    }
    const result = await axioInstance(allData);
    return result.data;
  } catch (error) {
    throw error.response.data;
  }
};
export {
  API,
  axioInstance,
  fireApiAction,
  // fireApiGet
};
