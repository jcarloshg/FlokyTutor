export interface ManagePost {
    createPost(inputCreatePost: InputCreatePost): Promise<PostResponse>;
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