import { Injectable } from '@angular/core';
import { ViewPost } from 'src/contexts/manage_post/application/view_post/view_post.application';
// implements infrastructure
import { GetPosts_AWS } from 'src/contexts/manage_post/infrastructure/aws/view_post/get-posts.aws'
import { GetPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/view_post/get-post-by-id.aws';
import { GetAccountByID_AWS } from 'src/contexts/shared/infrastructure/aws/get-account-by-id.aws';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
import { Post, Account } from 'src/contexts/shared/domain/models';
import { Loading } from '../../shared/services/loading';

@Injectable({
  providedIn: 'root'
})
export class ViewPostService extends Loading {

  private viewPost: ViewPost

  constructor() {
    super();
    this.viewPost = new ViewPost(new GetPosts_AWS(), new GetPostByID_AWS(), new GetAccountByID_AWS(), new GetCurrentTutorLogged_AWS());
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

