import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// context application
// context domain
import { GetCommentsFromPostByIDRepository } from 'src/contexts/manage_post/domain/domain_view_post/get-comments-from-post-by-iD.repository';
// context infrastructure
import { GetCommentsFromPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-comments-from-post-by-iD.aws';
// models
import { Comment } from 'src/contexts/shared/domain/models';

@Injectable({
    providedIn: 'root'
})
export class GetCommentsFromPostByIDService implements GetCommentsFromPostByIDRepository {

    private _comments: Comment[] = [];
    private _observableComments = new Subject<Comment[]>();

    constructor() { }

    public get posts() { return this._comments; }
    public get observablePosts() { return this._observableComments.asObservable(); }

    async run(ID: string): Promise<Comment[]> {
        const comments: Comment[] = await new GetCommentsFromPostByID_AWS().run(ID);
        this._comments = comments;
        this._observableComments.next(this._comments);
        return comments;
    }
}