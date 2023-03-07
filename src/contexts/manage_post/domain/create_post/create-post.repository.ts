import { Account, Post } from 'src/contexts/shared/domain/models';

export interface CreatePostRepository {


    // nominal tracking
    createPost(inputCreatePost: InputCreatePost): Promise<Post | null>;


    // tracking alternative nominal


    // auxiliary methods
    getCurrentTutorLogged(): Promise<Account | null>;

}


export interface InputCreatePost {
    title: string;
    body: string;
    category: "WRITING" | "READING" | "TALKING" | "LISTENING",
    tutorAccountID: string;
    author: Account,
}