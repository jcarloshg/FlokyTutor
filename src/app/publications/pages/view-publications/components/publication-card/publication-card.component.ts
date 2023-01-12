import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account, Post } from 'src/models';
import { AuthenticateAWSService } from '../../../../../authenticate/services/authenticate-aws.service';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() post!: Post;
  // public tutor: Account;

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  async ngOnInit(): Promise<void> { }

  goToPublication() {
    this.router.navigate(['./incio/publicaciones/', this.post.id]);
  }

  public get category(): string {
    return this.post.category as string;
  }

  _mouseenter() {
  }

  _mouseleave() { }

}
