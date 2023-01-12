import { ViewPostRepository } from "../../domain/view_post/view_post.repository";
import { GetPostsRepository } from "../../domain/view_post/repository/GetPost.repository";
import { GetPostByIDRepository } from "../../domain/view_post/repository/getPostByID.respository";
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
        const posts: Post[] = await this.getPostsRepository.getPosts();
        return posts;
    }

    public async getPostByID(ID: string): Promise<Post | null> {
        const post: Post | null = await this.getPostByIDRepository.getPostByID(ID);
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