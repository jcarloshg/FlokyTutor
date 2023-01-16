import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.css']
})
export class PublicationCommentsComponent implements OnInit {

  @Input() postID!: string;

  constructor() { }

  async ngOnInit() {
    await this.getComments();
  }

  async getComments() {
    console.log('[getComments]');
  }

}
