import axios from "axios";
import { getUrlWithParams } from "./general";

const getHeaders = (useToken) => {
  const headers = {
    "x-build-version": true,
  };

  //   const token = getToken();
  //   if (token) {
  //     headers.Authorization = `Bearer ${token}`;
  //   }

  return headers;
};

const getNoCacheHeaders = (useToken) => {
  const headers = {
    "Cache-Control": "no-cache",
    "x-build-version": true,
  };
  //   const token = getToken();
  //   if (token) {
  // headers.Authorization = `Bearer ${token}`;
  //   }

  return headers;
};

export const apiPost = (requestUrl, postData, useToken = true) =>
  axios({
    method: "post",
    url: requestUrl,
    headers: getHeaders(useToken),
    data: postData,
  });

// todo: need to update this method to append id with URL
// export const apiPut = (requestUrl, postData, useToken = true) =>
//   axios({
//     method: "put",
//     url: apiURL + requestUrl,
//     headers: getHeaders(useToken),
//     data: postData,
//   });

export const apiGet = (requestUrl, params = {}, useToken = false) => {
  const completeURL = getUrlWithParams(requestUrl, params);
  return axios.get(completeURL, {
    headers: { "Content-Type": "application/json" },
  });
};
