import { baseUrl } from "./baseUrl";
import { commonRequest } from "./commonRequest";

export const postApi = async (body) => {
    return await commonRequest('POST', `${baseUrl}/videos`, body);
}

export const getAllVideos = async () => {
    return await commonRequest('GET', `${baseUrl}/videos`, {});
}

export const getSingleVideo = async (id) => {
    return await commonRequest('GET', `${baseUrl}/videos/${id}`, {});
}

export const deleteVideo = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/videos/${id}`, {});
}

export const saveCategory = async (body) => {
    return await commonRequest('POST', `${baseUrl}/categories`, body);
}

export const getAllCategories = async () => {
    return await commonRequest('GET', `${baseUrl}/categories`, {});
}

export const getSingleCategory = async (id) => {
    return await commonRequest('GET', `${baseUrl}/categories/${id}`, {});
}

export const deleteCategory = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/categories/${id}`, {});
}

export const updateCategory = async (id,body) => {
    return await commonRequest('PUT', `${baseUrl}/categories/${id}`, body);
}

export const saveHistory = async (body) => {
    return await commonRequest('POST', `${baseUrl}/histories`, body);
}

export const getAllHistories = async () => {
    return await commonRequest('GET', `${baseUrl}/histories`, {});
}

export const deleteHistory = async (id) => {
    return await commonRequest('DELETE', `${baseUrl}/histories/${id}`, {});
}
