import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Loading } from 'src/app/shared/services/loading';
// context application
// context domain
import { GetPostsRepository } from 'src/contexts/manage_post/domain/domain_view_post/get-post.repository';
// context infrastructure
import { GetPosts_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-posts.aws';
// models
import { EagerPost, Post } from 'src/contexts/shared/domain/models';


@Injectable({
  providedIn: 'root'
})
export class ViewPostsService extends Loading implements GetPostsRepository {

  private posts: Post[] = [];
  private _observerPosts = of<Post[]>(this.posts);

  constructor() {
    super();
  }

  public get observerPosts() { return this._observerPosts; }

  async run(): Promise<EagerPost[]> {
    this.isLoading = true;
    const postsResponse: Post[] = await new GetPosts_AWS().run();
    this.posts = postsResponse;
    this.isLoading = false;
    return this.posts;
  }

}

