import { Injectable } from '@angular/core';
// use case
// import { ViewPost } from 'src/contexts/manage_post/view_post/application/view_post.application';
import { ViewPost } from 'src/contexts/manage_post/application/view_post.application';
// import { ViewPostRepository } from 'src/contexts/manage_post/view_post/domain/view_post.repository';
import { ViewPostRepository } from 'src/contexts/manage_post/domain/domain_view_post/view_post.repository';
// implements infrastructure
// import { GetPosts_AWS } from 'src/contexts/manage_post/view_post/infrastructure/aws/get-posts.aws'
import { GetPosts_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-posts.aws'
import { GetPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-post-by-id.aws';
import { GetAccountByID_AWS } from 'src/contexts/shared/infrastructure/aws/get-account-by-id.aws';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
import { GetCommentsFromPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-comments-from-post-by-iD.aws';
import { CommentPost_AWS } from 'src/contexts/manage_post/infrastructure/aws/comment-post.aws';
// models && inputs && others
import { Post, Account, Comment } from 'src/contexts/shared/domain/models';
import { InputCommentPost } from 'src/contexts/manage_post/domain/domain_view_post/comment-post.input';
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
      new GetCommentsFromPostByID_AWS(),
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

  public async getCommentsFromPostByID(ID: string): Promise<Comment[]> {
    const comments: Comment[] = await this.viewPost.getCommentsFromPostByID(ID);
    return comments;
  }

  public async commentPost(inputCommentPost: InputCommentPost): Promise<Boolean> {
    this.isLoading = true;
    const wasCreatedANewComment = await this.viewPost.commentPost(inputCommentPost);
    this.isLoading = false;
    return wasCreatedANewComment ? true : false;
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

