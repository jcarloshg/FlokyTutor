import { Injectable } from '@angular/core';
// use case
import { CreatePost } from 'src/contexts/manage_post/application/create-post.application'
// implements infrastructure
import { CreatePost_AWS } from 'src/contexts/manage_post/infrastructure/aws/create-post.repository';
import { InputCreatePost } from 'src/contexts/manage_post/domain/domain_create_post/create-post.repository';
import { GetCurrentTutorLogged_AWS } from 'src/contexts/authenticate/infrastructure/aws/get-current-tutor-logged.aws';
//      implements infrastructure - events
import { InMemoryAsyncEventBus } from 'src/contexts/shared/infrastructure/event_bus/in_memory/in-memory-async-event-bus';
import { Notify, NotifyOnCreatePost } from 'src/contexts/manage_post/application/create_post/notify-on-create-pos.application';
// others
import { Loading } from 'src/app/shared/services/loading';
import { EagerPost, Post, Account, EagerAccount } from 'src/contexts/shared/domain/models';

class PrintConsole implements Notify {

  async run(message: string): Promise<void> {
    await console.log('[PrintConsole]', message);
  }

}

@Injectable({
  providedIn: 'root'
})
export class CreatePostService extends Loading {

  private createPostNominalCase: CreatePost;

  constructor() {

    super();

    const inMemoryAsyncEventBus = new InMemoryAsyncEventBus();
    inMemoryAsyncEventBus.addSubscribers(
      [
        new NotifyOnCreatePost(new PrintConsole())
      ]
    );

    this.createPostNominalCase = new CreatePost({
      methodCreateAPostRepository: new CreatePost_AWS(),
      getCurrentTutorLoggedRepository: new GetCurrentTutorLogged_AWS(),
      eventBus: inMemoryAsyncEventBus,
    });
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

