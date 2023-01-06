import { Component, OnInit } from '@angular/core';
import { PublicationAWSService } from '../../service/publication-aws.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-view-publications',
  templateUrl: './view-publications.component.html',
  styleUrls: ['./view-publications.component.css']
})
export class ViewPublicationsComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    public publicationAWSService: PublicationAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const searchPostsResponse = await this.publicationAWSService.searchPosts({ byDate: '', byTitle: '' });
    this.posts = searchPostsResponse.data as Post[] ?? [];
    // if (searchPostsResponse.isOk == true) {
    //   const posts = searchPostsResponse.data as Post[];
    //   this.posts = posts;
    // }

  }

}
