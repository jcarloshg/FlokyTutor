import { Post } from "../../../shared/domain/models";

export interface ViewPostRepository {


    // nominal tracking
    getPosts(): Promise<Post[]>;
    getPostByID();
    registerComment();


    // auxiliary methods
    getPostAuthor();


    // tracking alternative nominal
    filterPosts();
    giveLikeToPost();

}