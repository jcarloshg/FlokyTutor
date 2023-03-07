import { Component, Input, OnInit } from '@angular/core';
import { ViewPostsService } from '../../../../service/view-posts.service';
import { Account, Post } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-publication-viewer',
  templateUrl: './publication-viewer.component.html',
  styleUrls: ['./publication-viewer.component.css']
})
export class PublicationViewerComponent implements OnInit {

  @Input() post!: Post;
  public postAuthor: Account | null = null;

  constructor(
    public viewPostService: ViewPostsService,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getPostAuthor(this.post.postAuthorId);
  }

  async getPostAuthor(authorID: string) {
    const account: Account | null = await this.viewPostService.getPostAuthor(authorID);
    this.postAuthor = account;
  }

}
