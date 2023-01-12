import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models';
import { PublicationAWSService } from '../../../../service/publication-aws.service';
import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';

@Component({
  selector: 'app-posts-viewer',
  templateUrl: './posts-viewer.component.html',
  styleUrls: ['./posts-viewer.component.css']
})
export class PostsViewerComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    // public publicationAWSService: PublicationAWSService,
    public viewPostService: ViewPostService,
  ) { }

  async ngOnInit(): Promise<void> {

    // this.posts = await this.viewPostService.getPosts();


    // const searchPostsResponse = await this.publicationAWSService.searchPosts({ byDate: '', byTitle: '' });
    // this.posts = searchPostsResponse.data as Post[] ?? [];
  }

}
