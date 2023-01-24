import { Component, Input, OnInit } from '@angular/core';
// import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { Comment } from 'src/contexts/shared/domain/models';
import { ViewPostsService } from '../../../../service/view-posts.service';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.css']
})
export class PublicationCommentsComponent implements OnInit {

  @Input() postID!: string;
  public comments: Comment[] = [];

  constructor(
    private viewPostService: ViewPostsService,
  ) { }

  async ngOnInit() {
    await this.getComments();
  }

  async getComments() {
    this.comments = await this.viewPostService.getCommentsFromPostByID(this.postID);
  }

}
