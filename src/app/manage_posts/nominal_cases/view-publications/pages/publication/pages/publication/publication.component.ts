import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewPostsService } from '../../../../service/view-posts.service';
import { Post } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  public post: Post | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    public viewPostService: ViewPostsService,
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
