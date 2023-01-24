import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  private _posts: Post[] = [];
  private _observablePosts = new Subject<Post[]>();

  constructor() { }

  public get posts() { return this._posts; }
  public get observablePosts() { return this._observablePosts.asObservable(); }

  async run(): Promise<Post[]> {
    console.log('[GetPostsService]-[run]');
    const getPostsResponse: Post[] = await new GetPosts_AWS().run();
    this._posts = getPostsResponse;
    this._observablePosts.next(this._posts);
    return getPostsResponse;
  }

}

