import { InputCommentPost } from "./comment-post.input";

export interface CommentPostRepository {
    run(inputCommentPost: InputCommentPost): Promise<Boolean>;
}