import { ViewPostRepository } from "../domain/view_post.repository";
// nominal tracking
import { GetPostByIDRepository } from "../domain/get-post-by-id.repository";
import { GetPostsRepository } from "../domain/get-post.repository";
import { GetCommentsFromPostByIDRepository } from '../domain/get-comments-from-post-by-iD.repository';
import { CommentPostRepository } from "../domain/comment-post.repository";
// tracking alternative nominal
//auxiliary methods
import { GetAccountByIDRepository } from "src/contexts/shared/domain/account/get-account-by-id.repository";
import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
// models && inputs
import { Post, EagerAccount, Account, Comment } from 'src/contexts/shared/domain/models';
import { InputCommentPost } from "../domain/comment-post.input";


export class ViewPost implements ViewPostRepository {

    constructor(
        // nominal tracking
        private getPostsRepository: GetPostsRepository,
        private getPostByIDRepository: GetPostByIDRepository,
        private getCommentsFromPostByIDRepository: GetCommentsFromPostByIDRepository,
        private commentPostRepository: CommentPostRepository,
        // tracking alternative nominal
        //auxiliary methods
        private getAccountByIDRepository: GetAccountByIDRepository,
        private getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository,
    ) { }


    //============================================================
    // nominal tracking
    //============================================================
    public async getPosts(): Promise<Post[]> {
        const posts: Post[] = await this.getPostsRepository.run();
        return posts;
    }

    public async getPostByID(ID: string): Promise<Post | null> {
        const post: Post | null = await this.getPostByIDRepository.run(ID);
        return post;
    }

    public async getCommentsFromPostByID(ID: string): Promise<Comment[]> {
        const comments: Comment[] = await this.getCommentsFromPostByIDRepository.run(ID);
        return comments;
    }

    public async commentPost(inputCommentPost: InputCommentPost): Promise<Boolean> {
        const wasCreatedANewComment = await this.commentPostRepository.run(inputCommentPost);
        return wasCreatedANewComment;
    }


    //============================================================
    // auxiliary methods
    //============================================================
    public async getPostAuthor(ID: string): Promise<Account | null> {
        const account: Account | null =
            await this.getAccountByIDRepository.run(ID);
        return account;
    }


    public async getCurrentTutorLogged(): Promise<EagerAccount | null> {
        const account: Account | null =
            await this.getCurrentTutorLoggedRepository.run();
        return account;
    }


    //============================================================
    // tracking alternative nominal
    //============================================================
    // public filterPosts() { }
    // public giveLikeToPost() { }


}