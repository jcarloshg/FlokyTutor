import { Injectable } from '@angular/core';
import { InputCommentPost } from 'src/contexts/manage_post/domain/domain_view_post/comment-post.input';
import { CommentPostRepository } from 'src/contexts/manage_post/domain/domain_view_post/comment-post.repository';
import { CommentPost_AWS } from 'src/contexts/manage_post/infrastructure/aws/comment-post.aws';
import { Comment } from 'src/contexts/shared/domain/models';

@Injectable({
    providedIn: 'root'
})
export class CommentPostRepositoryService implements CommentPostRepository {

    constructor() { }

    public async run(inputCommentPost: InputCommentPost): Promise<Comment | null> {
        const comment: Comment | null = await new CommentPost_AWS().run(inputCommentPost);
        return comment;
    }

}