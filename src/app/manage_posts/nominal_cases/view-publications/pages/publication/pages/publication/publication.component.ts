import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { Post } from 'src/models';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  public post: Post | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public viewPostService: ViewPostService,
  ) { }

  async ngOnInit() {
    await this._getPost();
  }

  private async _getPost() {
    const postIDToSearch = this.activatedRoute.snapshot.paramMap.get('id') || '';
    if (postIDToSearch == '') return;
    const postResponse = await this.viewPostService.getPostByID(postIDToSearch);
    this.post = postResponse;
  }

}
