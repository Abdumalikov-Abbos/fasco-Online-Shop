import { $api } from "./request";

const BASE_ATTACHMENT_URL = "/attachments";

export const uploadAttachment = async (formData) => {
  return await $api.post(BASE_ATTACHMENT_URL, formData); // id
};

export const uploadAttachments = async (formData) => {
  return await $api.post(BASE_ATTACHMENT_URL, formData); // [id]
};

export const deleteAttachment = async (id) => {
  await $api.delete(`${BASE_ATTACHMENT_URL}/${id}`); // ?void | message (Successfuly deleted);
};
