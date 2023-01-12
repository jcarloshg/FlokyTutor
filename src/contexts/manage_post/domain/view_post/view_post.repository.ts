import { Post } from "../../../shared/domain/models";

export interface ViewPostRepository {


    // nominal tracking
    getPosts(): Promise<Post[]>;
    getPostByID(ID: string): Promise<Post | null>;
    // registerComment();


    // // auxiliary methods
    // getPostAuthor();


    // // tracking alternative nominal
    // filterPosts();
    // giveLikeToPost();

}