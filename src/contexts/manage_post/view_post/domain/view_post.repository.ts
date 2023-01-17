import { Account, Post, Comment } from "src/contexts/shared/domain/models";
import { InputCommentPost } from "./comment-post.input";

export interface ViewPostRepository {


    // nominal tracking
    getPosts(): Promise<Post[]>;
    getPostByID(ID: string): Promise<Post | null>;
    getCommentsFromPostByID(ID: string): Promise<Comment[]>;
    commentPost(inputCommentPost: InputCommentPost): Promise<Boolean>;


    // auxiliary methods
    getPostAuthor(ID: string): Promise<Account | null>;
    getCurrentTutorLogged(): Promise<Account | null>;


    // // tracking alternative nominal
    // filterPosts();
    // giveLikeToPost();

}