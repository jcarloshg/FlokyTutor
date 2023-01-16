import { Injectable } from '@angular/core';
// use case
import { ViewPost } from 'src/contexts/manage_post/view_post/application/view_post.application';
import { ViewPostRepository } from 'src/contexts/manage_post/view_post/domain/view_post.repository';
// implements infrastructure
import { GetPosts_AWS } from 'src/contexts/manage_post/view_post/infrastructure/aws/get-posts.aws'
import { GetPostByID_AWS } from 'src/contexts/manage_post/view_post/infrastructure/aws/get-post-by-id.aws';
import { GetAccountByID_AWS } from 'src/contexts/shared/infrastructure/aws/get-account-by-id.aws';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
import { CommentPost_AWS } from 'src/contexts/manage_post/view_post/infrastructure/aws/comment-post.aws';
// models && inputs && others
import { Post, Account } from 'src/contexts/shared/domain/models';
import { InputCommentPost } from 'src/contexts/manage_post/view_post/domain/comment-post.input';
import { Loading } from '../../shared/services/loading';

@Injectable({
  providedIn: 'root'
})
export class ViewPostService extends Loading implements ViewPostRepository {

  private viewPost: ViewPost

  constructor() {
    super();
    this.viewPost = new ViewPost(
      new GetPosts_AWS(),
      new GetPostByID_AWS(),
      new CommentPost_AWS(),
      new GetAccountByID_AWS(),
      new GetCurrentTutorLogged_AWS(),
    );
  }


  //============================================================
  // nominal tracking
  //============================================================
  public async getPosts(): Promise<Post[]> {
    this.isLoading = true;
    const posts: Post[] = await this.viewPost.getPosts();
    this.isLoading = false;
    return posts;
  }

  public async getPostByID(ID: string): Promise<Post | null> {
    this.isLoading = true;
    const post: Post | null = await this.viewPost.getPostByID(ID);
    this.isLoading = false;
    return post;
  }

  public async getCommentsFromPostByID(ID: string): Promise<[]> {
    return [];
  }

  public async commentPost(inputCommentPost: InputCommentPost): Promise<Boolean> {
    throw new Error('Method not implemented.');
  }


  //============================================================
  // tracking alternative nominal
  //============================================================


  //============================================================
  // auxiliary methods
  //============================================================
  public async getPostAuthor(ID: string): Promise<Account | null> {
    this.isLoading = true;
    const account: Account | null = await this.viewPost.getPostAuthor(ID);
    this.isLoading = false;
    return account;
  }

  public async getCurrentTutorLogged(): Promise<Account | null> {
    this.isLoading = true;
    const account: Account | null = await this.viewPost.getCurrentTutorLogged();
    this.isLoading = false;
    return account;
  }

}

