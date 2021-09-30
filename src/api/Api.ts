// import { TOKEN_LS_NAME } from "../Constants/Constants";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem(TOKEN_LS_NAME);
//   //store.commit('globalModule/toggleLoader', true)
//   if (token) {
//     config.headers["session-id"] = token;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     //store.commit('globalModule/toggleLoader', false)
//     return Promise.resolve(response);
//   },
//   (error) => {
//     //store.commit('globalModule/toggleLoader', false)
//     return Promise.reject(error);
//   }
// );

export const api = axiosInstance;
