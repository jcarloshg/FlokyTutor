import { Component, Input, OnInit, OnDestroy } from '@angular/core';
// import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { Comment } from 'src/contexts/shared/domain/models';
import { ViewPostsService } from '../../../../service/view-posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.css']
})
export class PublicationCommentsComponent implements OnInit, OnDestroy {

  @Input() postID!: string;
  public comments: Comment[] = [];
  private comments$: Subscription;

  constructor(
    private viewPostService: ViewPostsService,
  ) {
    const getCommentsFromPostByIDService = this.viewPostService.getCommentsFromPostByIDService;
    this.comments$ = getCommentsFromPostByIDService
      .observablePosts
      .subscribe(comments => this.comments = comments);
  }

  async ngOnInit() {
    await this.viewPostService.getCommentsFromPostByIDService.run(this.postID);
  }

  ngOnDestroy(): void {
    this.comments$.unsubscribe();
  }

}
