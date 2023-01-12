import { Post } from "../../../../shared/domain/models";
export interface GetPostByIDRepository {
    getPostByID(ID: string): Promise<Post | null>;
}

