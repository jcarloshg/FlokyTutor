import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.css']
})
export class PublicationCardComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {}

}
