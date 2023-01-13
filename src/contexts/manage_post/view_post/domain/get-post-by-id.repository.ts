import { Post } from "src/contexts/shared/domain/models";

export interface GetPostByIDRepository {
    run(ID: string): Promise<Post | null>;
}

