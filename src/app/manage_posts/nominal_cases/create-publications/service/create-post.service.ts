import { Injectable } from '@angular/core';
// use case
import { CreatePost } from 'src/contexts/manage_post/application/create_post/create-post.application';
import { CreatePostRepository, InputCreatePost } from 'src/contexts/manage_post/domain/create_post/create-post.repository';
// implements infrastructure
import { CreatePost_AWS } from 'src/contexts/manage_post/infrastructure/aws/create-post.aws';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
// others
import { Loading } from 'src/app/shared/services/loading';
import { Post, Account } from 'src/contexts/shared/domain/models';
import { ManagePostsEventBusService } from 'src/app/manage_posts/service/manage_posts.service';


@Injectable({
  providedIn: 'root'
})
export class CreatePostService extends Loading implements CreatePostRepository {

  private createPostNominalCase: CreatePost;

  constructor(
    managePostsEventBusService: ManagePostsEventBusService,
  ) {

    super();

    this.createPostNominalCase = new CreatePost({
      methodCreateAPostRepository: new CreatePost_AWS(),
      getCurrentTutorLoggedRepository: new GetCurrentTutorLogged_AWS(),
      eventBus: managePostsEventBusService.inMemoryAsyncEventBus,
    });
  }


  //============================================================
  // nominal tracking
  //============================================================
  public async createPost(inputCreatePost: InputCreatePost): Promise<Post | null> {
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
  public async getCurrentTutorLogged(): Promise<Account | null> {
    this.isLoading = true;
    const account: Account | null = await this.createPostNominalCase.getCurrentTutorLogged();
    this.isLoading = false;
    return account;
  }


}

