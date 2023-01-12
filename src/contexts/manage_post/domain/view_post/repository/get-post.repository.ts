import { Post } from "../../../../shared/domain/models";

export interface GetPostsRepository {
    run(): Promise<Post[]>;
}

