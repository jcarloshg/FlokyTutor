import { Comment } from "src/contexts/shared/domain/models";
import { InputCommentPost } from "./comment-post.input";


export interface CommentPostRepository {
    run(inputCommentPost: InputCommentPost): Promise<Comment | null>;
}