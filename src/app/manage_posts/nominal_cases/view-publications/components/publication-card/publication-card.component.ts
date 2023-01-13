import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateAWSService } from '../../../../../authenticate/services/authenticate-aws.service';
import { ViewPostService } from 'src/app/manage_posts/service/view-post.service';
import { Account, Post } from 'src/models';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() post!: Post;
  public postAuthor: Account | null = null;

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
    public viewPostService: ViewPostService,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getPostAuthor(this.post.tutorAccountID);
  }

  goToPublication() {
    this.router.navigate(['./incio/publicaciones/', this.post.id]);
  }


  //============================================================
  // auxiliary
  //============================================================
  public get category(): string {
    return this.post.category as string;
  }

  public async getPostAuthor(authorID: string) {
    const account: Account | null = await this.viewPostService.getPostAuthor(authorID);
    this.postAuthor = account;
  }

}

