import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from 'src/models';
import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { GetPostsService } from '../../service/get-posts-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  private posts$: Subscription;

  constructor(
    viewPostService: ViewPostService,
    private getPostsService: GetPostsService,
  ) {

    this.posts$ = this.getPostsService
      .observablePosts
      .subscribe(posts => this.posts = posts);
  }

  async ngOnInit(): Promise<void> {
    await this.getPostsService.run();
  }

  ngOnDestroy(): void {
    this.posts$.unsubscribe();
  }

  async run() {
    await this.getPostsService.run();
  }

}
