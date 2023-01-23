import { Injectable } from '@angular/core';
import { GetCommentsFromPostByIDRepository } from 'src/contexts/manage_post/domain/domain_view_post/get-comments-from-post-by-iD.repository';
import { GetCommentsFromPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-comments-from-post-by-iD.aws';
import { Comment } from 'src/contexts/shared/domain/models';

@Injectable({
    providedIn: 'root'
})
export class GetCommentsFromPostByIDService implements GetCommentsFromPostByIDRepository {

    constructor() { }

    async run(ID: string): Promise<Comment[]> {
        const comments: Comment[] = await new GetCommentsFromPostByID_AWS().run(ID);
        return comments;
    }
}