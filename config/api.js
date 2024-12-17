import axios from "axios";

const API = {
  travel_blogs: "travel_blogs",
  home_page: "home_page",
  privacy_policy: "privacy_policy",
  about_us: "about_us",
  subscriber_emails: "subscriber_emails",
};

const API_ENDPOINT = "https://admin.galtravelbychandni.com/items/";

const axioInstance = axios.create({
  //   baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  baseURL: API_ENDPOINT,
});
axioInstance.interceptors.request.use((request) => {
  // request.headers["Content-Type"] = 'multipart/form-data';
  // let jwtToken = getCookie(process.env.MANAV || process.env.NEXT_PUBLIC_MANAV)
  // if(jwtToken)
  request.headers["Authorization"] = `Bearer ${process.env.AUTH_TOKEN}`;

  return request;
});

const fireApiAction = async (url, method = "GET", data = {}) => {
  try {
    method = method.toLowerCase();
    let allData = {
      url,
      method,
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
