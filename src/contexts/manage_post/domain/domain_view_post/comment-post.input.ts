import { Account } from "src/contexts/shared/domain/models";

export interface InputCommentPost {
    body: string;
    postID: string;
    author: Account;
}