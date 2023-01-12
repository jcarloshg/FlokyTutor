import { ViewPostRepository } from "../../domain/view_post/repository/view_post.repository";
import { GetPostsRepository } from "../../domain/view_post/repository/get-post.repository";
import { GetPostByIDRepository } from "../../domain/view_post/repository/get-post-by-id.repository";
import { Post } from "../../../shared/domain/models";


export class ViewPost implements ViewPostRepository {

    constructor(
        private getPostsRepository: GetPostsRepository,
        private getPostByIDRepository: GetPostByIDRepository,
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
    // public getPostAuthor() { }


    //============================================================
    // tracking alternative nominal
    //============================================================
    // public filterPosts() { }
    // public giveLikeToPost() { }


}