import apiClient from "./axios";

export const getPosts = async ()=>{
    const results = await apiClient.get("posts");
    return results.data;
};
;
