import { ActivityType, Post } from "src/contexts/shared/domain/models";

export interface ManagePost {
    createPost(inputCreatePost: InputCreatePost): Promise<PostResponse>;
    getPostByID(id: string): Promise<Post | null>;
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
    category: "WRITING" | "READING" | "TALKING" | "LISTENING",
    tutorAccountID: string;
}
export interface InputSearchPosts {
    byTitle: string;
    byDate: string;
}

