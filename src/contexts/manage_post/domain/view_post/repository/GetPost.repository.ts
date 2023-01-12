import { Post } from "../../../../shared/domain/models";

export interface GetPostsRepository {
    getPosts(): Promise<Post[]>;
}

