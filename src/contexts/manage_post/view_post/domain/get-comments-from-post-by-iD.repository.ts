import { Comment } from "src/contexts/shared/domain/models";

export interface GetCommentsFromPostByIDRepository {
    run(ID: string): Promise<Comment[]>
}