// import { $api } from "./request";

// const BASE_AUTH_URL = "/auth";

// // login | register | logout | refresh | me | verify | verify-forget | forgot-password

// export const forgotPassword = async (email) => {
//   const response = await $api.post(`${BASE_AUTH_URL}/forgot-password`, {
//     email,
//   });
//   // response.data => Email code yuborildi;
//   return response.data;
// };

// export const refresh = async () => {
//   const response = await $api.post(`${BASE_AUTH_URL}/refresh`);
//   return response.data;
// };

// export const login = async (email, password) => {
//   const response = await $api.post(`${BASE_AUTH_URL}/login`, {
//     email,
//     password,
//   });
//   // response.data => Token & User data => Cookie => redirect to home;
//   return response.data;
// };

// export const register = async (email, password) => {
//   const response = await $api.post(`${BASE_AUTH_URL}/register`, {
//     email,
//     password,
//   });
//   // response.data => Email code yuborildi;
//   return response.data;
// };

// export const verify = async (email, code) => {
//   const response = await $api.post(`${BASE_AUTH_URL}/verify`, { email, code });
//   // response.data => Code ✅ => Token ? Error (Resend)
//   return response.data;
// };

// export const logout = async () => {
//   const response = await $api.post(`${BASE_AUTH_URL}/logout`);
//   return response.data;
// };

// export const me = async () => {
//   const response = await $api.get(`${BASE_AUTH_URL}/me`);
//   return response.data;
// };


// src/api/authApi.js
  export const  fakeAuthAPI = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'abdumalikovabbos@gmail.com' && password === 'password') {
          resolve({
            name: 'Abdumalikov Abbos',
            email,
            token: 'fake-jwt-token',
          });
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

