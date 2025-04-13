import axios from "axios";

const BASE_URL = "http://localhost:3003";

const $api = axios.create({
  baseURL: BASE_URL,
});

// $api.interceptors.request.use((config) => {
//   const token = Cookie.get("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

// $api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//       if (error.response?.status === 401) window.location.href = "/login";
//       else if (error.response?.status === 403) {
//           notifyError("Siz bu amalni bajara olmaysiz!");
//           return Promise.resolve();
//       }
//       throw error;
//   },
// );

export { $api };
