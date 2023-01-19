import { Injectable } from '@angular/core';
// use case
// import { CreatePost } from 'src/contexts/manage_post/create_post/application/create-post.application';
import { CreatePost } from 'src/contexts/manage_post/application/create-post.application'
// implements infrastructure
// import { CreatePost_AWS } from 'src/contexts/manage_post/create_post/infrastructure/aws/create-post.repository';
import { CreatePost_AWS } from 'src/contexts/manage_post/infrastructure/aws/create-post.repository';
// import { InputCreatePost } from 'src/contexts/manage_post/create_post/domain/create-post.repository';
import { InputCreatePost } from 'src/contexts/manage_post/domain/domain_create_post/create-post.repository';
// import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
// others
import { Loading } from 'src/app/shared/services/loading';
import { EagerPost, Post, Account, EagerAccount } from 'src/contexts/shared/domain/models';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService extends Loading {

  private createPostNominalCase: CreatePost;

  constructor() {
    super();
    this.createPostNominalCase = new CreatePost(
      new CreatePost_AWS(),
      new GetCurrentTutorLogged_AWS(),
    );
  }


  //============================================================
  // nominal tracking
  //============================================================
  public async createPost(inputCreatePost: InputCreatePost): Promise<EagerPost | null> {
    this.isLoading = true;
    const post: Post | null = await this.createPostNominalCase.createPost(inputCreatePost);
    this.isLoading = false;
    return post;
  }


  //============================================================
  // tracking alternative nominal
  //============================================================


  //============================================================
  // auxiliary methods
  //============================================================
  public async getCurrentTutorLogged(): Promise<EagerAccount | null> {
    this.isLoading = true;
    const account: Account | null = await this.createPostNominalCase.getCurrentTutorLogged();
    this.isLoading = false;
    return account;
  }


}

