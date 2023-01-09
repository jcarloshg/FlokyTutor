import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models';
import { PublicationAWSService } from '../../../../service/publication-aws.service';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    public publicationAWSService: PublicationAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const searchPostsResponse = await this.publicationAWSService.searchPosts({ byDate: '', byTitle: '' });
    this.posts = searchPostsResponse.data as Post[] ?? [];
  }

}
