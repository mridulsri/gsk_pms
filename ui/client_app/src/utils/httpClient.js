import axios from "axios";
import store from "../store/index";

const callAPI = async (method, url, params) => {
  let apiUrl = process.env.VUE_APP_API_URL || "http://localhost:5000";
  let config = {
    url: apiUrl + url,
    method: method,
  };
  if (method === "get" && params) {
    config.params = params;
  }
  if (method === "post" || method === "put" || method === "patch") {
    config.data = params ? params : {};
  }

  let response = undefined;
  try {
    store.commit("set_loader", true);
    response = await axios(config);
  } catch (error) {
    response = error.response;
  } finally {
    store.commit("set_loader", false);
  }
  return response;
};

const GET = async (url, data) => {
  return callAPI("get", url, data);
};

const POST = async (url, data) => {
  return callAPI("post", url, data);
};

const PUT = async (url, data) => {
  return callAPI("put", url, data);
};

const PATCH = async (url, data) => {
  return callAPI("patch", url, data);
};

const DELETE = async (url, data) => {
  return callAPI("delete", url, data);
};

export default {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};
