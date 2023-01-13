// import { Post } from "../../../../shared/domain/models";
import { Post } from "src/contexts/shared/domain/models";


export interface GetPostsRepository {
    run(): Promise<Post[]>;
}

