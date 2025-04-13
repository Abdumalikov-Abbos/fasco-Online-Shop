import { $api } from "./request";

const USERS_URL = "/users";

export const fetchAllUsers = async () => {
  return await $api.get(USERS_URL);
};

export const addNewUsers = async (userData) => {
  return await $api.post(USERS_URL, userData);
};
