
import { ViewPostRepository } from '../../domain/domain_view_post/view_post.repository';
//  nominal tracking
import { GetPostsRepository } from '../../domain/domain_view_post/get-post.repository';
import { GetPostByIDRepository } from '../../domain/domain_view_post/get-post-by-id.repository';
import { GetCommentsFromPostByIDRepository } from '../../domain/domain_view_post/get-comments-from-post-by-iD.repository';
import { CommentPostRepository } from '../../domain/domain_view_post/comment-post.repository';
//  tracking alternative nominal
//  auxiliary methods
import { GetAccountByIDRepository } from "src/contexts/shared/domain/account/get-account-by-id.repository";
import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
// models && inputs
import { Post, EagerAccount, Account, Comment as Comment_AWS } from 'src/contexts/shared/domain/models';
import { InputCommentPost } from "../../domain/domain_view_post/comment-post.input";
import { EventBus } from 'src/contexts/shared/domain/event-bus';
import { Comment as CommentDomain } from '../../domain/Comment';


export class ViewPost implements ViewPostRepository {

    // nominal tracking
    private getPostsRepository: GetPostsRepository;
    private getPostByIDRepository: GetPostByIDRepository;
    private getCommentsFromPostByIDRepository: GetCommentsFromPostByIDRepository;
    private commentPostRepository: CommentPostRepository;
    // tracking alternative nominal
    //auxiliary methods
    private getAccountByIDRepository: GetAccountByIDRepository;
    private getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository;
    private eventBus: EventBus;

    constructor(
        params: {
            // nominal tracking
            getPostsRepository: GetPostsRepository;
            getPostByIDRepository: GetPostByIDRepository;
            getCommentsFromPostByIDRepository: GetCommentsFromPostByIDRepository;
            commentPostRepository: CommentPostRepository;
            // tracking alternative nominal
            //auxiliary methods
            getAccountByIDRepository: GetAccountByIDRepository;
            getCurrentTutorLoggedRepository: GetCurrentTutorLoggedRepository;
            eventBus: EventBus;
        }
    ) {
        this.getPostsRepository = params.getPostsRepository;
        this.getPostByIDRepository = params.getPostByIDRepository;
        this.getCommentsFromPostByIDRepository = params.getCommentsFromPostByIDRepository;
        this.commentPostRepository = params.commentPostRepository;
        this.getAccountByIDRepository = params.getAccountByIDRepository;
        this.getCurrentTutorLoggedRepository = params.getCurrentTutorLoggedRepository;
        this.eventBus = params.eventBus;
    }


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

    public async getCommentsFromPostByID(ID: string): Promise<Comment_AWS[]> {
        const comments: Comment_AWS[] = await this.getCommentsFromPostByIDRepository.run(ID);
        return comments;
    }

    public async commentPost(inputCommentPost: InputCommentPost): Promise<Comment_AWS | null> {

        const createdComment: Comment_AWS | null = await this.commentPostRepository.run(inputCommentPost);

        const commentDomain = createdComment !== null
            ? CommentDomain.commentRegistered(createdComment)
            : CommentDomain.commentNotRegistered(inputCommentPost);

        await this.eventBus.publish(commentDomain.pullDomainEvents());

        return createdComment;
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