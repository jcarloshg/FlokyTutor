import { ViewPostRepository } from "../../domain/view_post/view_post.repository";
import { GetPostsRepository } from "../../domain/view_post/repository/GetPost.repository";
import { Post } from "../../../shared/domain/models";


export class ViewPost implements ViewPostRepository {

    constructor(
        private getPostsRepository: GetPostsRepository,
    ) { }

    //============================================================
    // nominal tracking
    //============================================================
    public async getPosts(): Promise<Post[]> {
        const posts: Post[] = await this.getPostsRepository.getPosts();
        return posts;
    }

    public getPostByID() { }
    public registerComment() { }


    // auxiliary methods
    public getPostAuthor() { }


    // tracking alternative nominal
    public filterPosts() { }
    public giveLikeToPost() { }


}