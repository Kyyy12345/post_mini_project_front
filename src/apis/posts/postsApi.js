import { api } from "../config/axiosConfig"

export const createPost = (formData) => {
    return api.post("/api/posts", formData);
}

export const getFeeds = (params) => {
    return api.get("/api/posts/feeds", {params});
    
}

//자 넌 사탕 3개 머거~~무설탕이니까 갠춘!