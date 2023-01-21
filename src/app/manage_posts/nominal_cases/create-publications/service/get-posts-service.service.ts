import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// context application
// context domain
import { GetPostsRepository } from 'src/contexts/manage_post/domain/domain_view_post/get-post.repository';
// context infrastructure
import { GetPosts_AWS } from 'src/contexts/manage_post/infrastructure/aws/get-posts.aws';
// models
import { Post } from 'src/contexts/shared/domain/models';


@Injectable({
  providedIn: 'root'
})
export class GetPostsService implements GetPostsRepository {

  private posts: Post[] = [];
  private _observerPosts = of<Post[]>(this.posts);

  constructor() { }

  public get observerPosts() { return this._observerPosts; }

  async run(): Promise<Post[]> {
    const postsResponse: Post[] = await new GetPosts_AWS().run();
    this.posts = postsResponse;
    return this.posts;
  }

}

