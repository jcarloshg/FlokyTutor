import { Injectable } from '@angular/core';
// domain
import { ViewPostRepository } from '../../../../../contexts/manage_post/domain/domain_view_post/view_post.repository';
import { ViewPost } from 'src/contexts/manage_post/application/view_post.application';
// infrastructure
import { GetPostsService } from './get-posts-service.service';
import { GetPostByIDService } from './get-post-by-ID.service';
import { GetCommentsFromPostByIDService } from './get-comments-from-post-by-ID.service';
import { CommentPostRepositoryService } from './comment-post.service';
import { GetAccountByIDService } from './get-account-by-ID.service';
import { GetCurrentTutorLoggedService } from './get-current-tutor-logged.service';
// models
import { InputCommentPost } from 'src/contexts/manage_post/domain/domain_view_post/comment-post.input';
import { Post, Comment, Account } from 'src/contexts/shared/domain/models';

@Injectable({
    providedIn: 'root'
})
export class ViewPostsService implements ViewPostRepository {

    private viewPost: ViewPost;

    private _getPostsService: GetPostsService;
    private _getPostByIDService: GetPostByIDService;
    private _getCommentsFromPostByIDService: GetCommentsFromPostByIDService;
    private _commentPostRepositoryService: CommentPostRepositoryService;
    private _getAccountByIDService: GetAccountByIDService;
    private _getCurrentTutorLoggedService: GetCurrentTutorLoggedService;

    public get getPostsService(): GetPostsService { return this._getPostsService; }
    public get getPostByIDService(): GetPostByIDService { return this._getPostByIDService; }
    public get getCommentsFromPostByIDService(): GetCommentsFromPostByIDService { return this._getCommentsFromPostByIDService; }
    public get commentPostRepositoryService(): CommentPostRepositoryService { return this._commentPostRepositoryService; }
    public get getAccountByIDService(): GetAccountByIDService { return this._getAccountByIDService; }
    public get getCurrentTutorLoggedService(): GetCurrentTutorLoggedService { return this._getCurrentTutorLoggedService; }

    constructor(
        getPostsService: GetPostsService,
        getPostByIDService: GetPostByIDService,
        getCommentsFromPostByIDService: GetCommentsFromPostByIDService,
        commentPostRepositoryService: CommentPostRepositoryService,
        getAccountByIDService: GetAccountByIDService,
        getCurrentTutorLoggedService: GetCurrentTutorLoggedService,
    ) {
        this._getPostsService = getPostsService
        this._getPostByIDService = getPostByIDService;
        this._getCommentsFromPostByIDService = getCommentsFromPostByIDService;
        this._commentPostRepositoryService = commentPostRepositoryService;
        this._getAccountByIDService = getAccountByIDService;
        this._getCurrentTutorLoggedService = getCurrentTutorLoggedService;

        this.viewPost = new ViewPost(
            this._getPostsService,
            this._getPostByIDService,
            this._getCommentsFromPostByIDService,
            this._commentPostRepositoryService,
            this._getAccountByIDService,
            this._getCurrentTutorLoggedService,
        );

    }



    //============================================================
    // nominal tracking
    //============================================================
    public async getPosts(): Promise<Post[]> {
        const posts: Post[] = await this.viewPost.getPosts();
        return posts;
    }

    public async getPostByID(ID: string): Promise<Post | null> {
        const post: Post | null = await this.viewPost.getPostByID(ID);
        return post;
    }


    public async getCommentsFromPostByID(ID: string): Promise<Comment[]> {
        const comments: Comment[] = await this.viewPost.getCommentsFromPostByID(ID);
        return comments;
    }

    public async commentPost(inputCommentPost: InputCommentPost): Promise<Boolean> {
        // todo return comment model
        const wasCreatedANewComment = await this.viewPost.commentPost(inputCommentPost);
        return wasCreatedANewComment ? true : false;
    }



    //============================================================
    // tracking alternative nominal
    //============================================================



    //============================================================
    // auxiliary methods
    //============================================================
    public async getPostAuthor(ID: string): Promise<Account | null> {
        const account: Account | null = await this.viewPost.getPostAuthor(ID);
        return account;
    }

    public async getCurrentTutorLogged(): Promise<Account | null> {
        const account: Account | null = await this.viewPost.getCurrentTutorLogged();
        return account;
    }


}
