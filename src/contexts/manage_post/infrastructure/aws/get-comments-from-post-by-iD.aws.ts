import { DataStore } from 'aws-amplify';
import { GetCommentsFromPostByIDRepository } from '../../domain/domain_view_post/get-comments-from-post-by-iD.repository';
import { Comment } from "src/contexts/shared/domain/models";

export class GetCommentsFromPostByID_AWS implements GetCommentsFromPostByIDRepository {

    constructor() { }

    async run(ID: string): Promise<Comment[]> {
        const commentsResponse: Comment[] = await DataStore.query(
            Comment,
            comment => comment.postID("eq", ID),
            {
                sort: comment => comment.createdAt("DESCENDING"),
            }
        );
        return commentsResponse;
    }
}