import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/models';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() post!: Post;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

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
