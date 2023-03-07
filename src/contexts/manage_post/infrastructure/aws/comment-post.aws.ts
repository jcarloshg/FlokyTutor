import { DataStore } from "aws-amplify";
import { CommentPostRepository } from '../../domain/domain_view_post/comment-post.repository';
import { InputCommentPost } from "../../domain/domain_view_post/comment-post.input";
import { Comment } from "src/contexts/shared/domain/models";

export class CommentPost_AWS implements CommentPostRepository {

    constructor() { }

    public async run(inputCommentPost: InputCommentPost): Promise<Comment | null> {

        try {

            return null;

            // const newComment: Comment = new Comment(
            //     {
            //         body: inputCommentPost.body,
            //         postID: inputCommentPost.postID,
            //         author: inputCommentPost.author,
            //     }
            // );
            // const commentCreated = await DataStore.save(newComment);
            // let commentCreatedWhitAllData = commentCreated;
            // while (commentCreatedWhitAllData.createdAt == undefined) {
            //     commentCreatedWhitAllData = await DataStore.query(Comment, commentCreated.id) ?? commentCreated;
            // }
            // return commentCreatedWhitAllData;

        } catch (error) {
            return null;
        }
    }

}