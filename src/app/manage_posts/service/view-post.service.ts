import { Injectable } from '@angular/core';
import { ViewPost } from 'src/contexts/manage_post/application/view_post/view_post.application';
// implements infrastructure
import { GetPosts_AWS } from 'src/contexts/manage_post/infrastructure/aws/view_post/get-posts.aws'
import { GetPostByID_AWS } from 'src/contexts/manage_post/infrastructure/aws/view_post/get-post-by-id.aws';
import { GetAccountByID_AWS } from 'src/contexts/shared/infrastructure/aws/get-account-by-id.aws';

@Injectable({
  providedIn: 'root'
})
export class ViewPostService extends ViewPost {

  constructor() {
    super(
      new GetPosts_AWS(),
      new GetPostByID_AWS(),
      new GetAccountByID_AWS(),
    );
  }
}

