export interface ManagePost {
    createPost(): Promise<PostResponse>;
}

export interface PostResponse {
    isOk: boolean,
    message?: string,
    data?: any
}