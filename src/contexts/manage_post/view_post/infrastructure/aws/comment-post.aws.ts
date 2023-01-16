import { DataStore } from "aws-amplify";
import { CommentPostRepository } from "../../domain/comment-post.repository";
import { InputCommentPost } from "../../domain/comment-post.input";
import { Comment } from "src/contexts/shared/domain/models";

export class CommentPost_AWS implements CommentPostRepository {

    constructor() { }

    public async run(inputCommentPost: InputCommentPost): Promise<Boolean> {

        try {

            const newComment: Comment = new Comment({
                body: inputCommentPost.body,
                postID: inputCommentPost.postID,
                author: inputCommentPost.author,
            });

            const commentCreated = await DataStore.save(newComment);
            return commentCreated ? true : false;

        } catch (error) {
            return false;
        }
    }

}