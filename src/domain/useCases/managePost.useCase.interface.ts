import { Post } from "src/models";

export interface ManagePost {
    createPost(inputCreatePost: InputCreatePost): Promise<PostResponse>;
    getPostByID(id: string): Promise<Post>;
    searchPosts(inputSearchPosts: InputSearchPosts): Promise<PostResponse>;
}

export interface PostResponse {
    isOk: boolean,
    message?: string,
    data?: any
}

export interface InputCreatePost {
    title: string;
    body: string;
    tutorAccountID: string;
}
export interface InputSearchPosts {
    byTitle: string;
    byDate: string;
}

