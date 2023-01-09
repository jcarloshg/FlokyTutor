import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicationAWSService } from '../../service/publication-aws.service';
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
    public publicationAWSService: PublicationAWSService,
  ) { }

  async ngOnInit() {
    await this._getPost();
  }

  private async _getPost() {
    const postIDToSearch = this.activatedRoute.snapshot.paramMap.get('id') || '';
    console.log(postIDToSearch);
    if (postIDToSearch == '') return;
    const postResponse = await this.publicationAWSService.getPostByID(postIDToSearch);
    this.post = postResponse;
  }

}
