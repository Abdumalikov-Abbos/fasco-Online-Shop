import { $api } from "./request";

const PRODUCTS_BASE_URL = "/products";

export const fetchAllProducts = async () => {
  return await $api.get(PRODUCTS_BASE_URL);
};
