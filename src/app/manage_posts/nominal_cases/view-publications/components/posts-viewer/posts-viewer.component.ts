import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewPostsService } from '../../service/view-posts.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit, OnDestroy {

  public posts: Post[] = [];
  private posts$: Subscription;

  constructor(
    private viewPostService: ViewPostsService,
  ) {
    const getPostsService = this.viewPostService.getPostsService;
    this.posts$ = getPostsService
      .observablePosts
      .subscribe(posts => this.posts = posts);
  }

  async ngOnInit(): Promise<void> {
    await this.viewPostService.getPostsService.run();
  }

  ngOnDestroy(): void {
    this.posts$.unsubscribe();
  }

}
