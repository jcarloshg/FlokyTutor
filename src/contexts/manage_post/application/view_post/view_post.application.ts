import { ViewPostRepository } from "../../domain/view_post/repository/view_post.repository";
import { GetPostsRepository } from "../../domain/view_post/repository/get-post.repository";
import { GetPostByIDRepository } from "../../domain/view_post/repository/get-post-by-id.repository";
import { GetAccountByIDRepository } from "src/contexts/shared/domain/account/get-account-by-id.repository";
import { GetCurrentTutorLoggedRepository } from "src/contexts/authenticate/domain/repository/get-current-tutor-logged.repository";
import { Account, EagerAccount, Post } from "../../../shared/domain/models";

export class ViewPost implements ViewPostRepository {

    constructor(
        private getPostsRepository: GetPostsRepository,
        private getPostByIDRepository: GetPostByIDRepository,
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

    // public registerComment() { }


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