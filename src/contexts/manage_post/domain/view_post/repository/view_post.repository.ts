import { Post, Account } from "../../../../shared/domain/models";

export interface ViewPostRepository {


    // nominal tracking
    getPosts(): Promise<Post[]>;
    getPostByID(ID: string): Promise<Post | null>;
    // registerComment();


    // auxiliary methods
    getPostAuthor(ID: string): Promise<Account | null>;
    getCurrentTutorLogged(): Promise<Account | null>;


    // // tracking alternative nominal
    // filterPosts();
    // giveLikeToPost();

}