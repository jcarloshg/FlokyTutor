import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models';
import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { GetPostsService } from '../../service/get-posts-service.service';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    viewPostService: ViewPostService,
    private getPostsService: GetPostsService,
  ) {
    this.getPostsService
      .observablePosts
      .subscribe(posts => this.posts = posts);
  }

  async ngOnInit(): Promise<void> {
    await this.getPostsService.run();
    // this.posts = await this.viewPostService.getPosts();
  }

  async run() {
    await this.getPostsService.run();
  }

}
