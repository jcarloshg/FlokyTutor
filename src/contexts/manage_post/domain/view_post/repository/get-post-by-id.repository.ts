import { Post } from "../../../../shared/domain/models";

export interface GetPostByIDRepository {
    run(ID: string): Promise<Post | null>;
}

