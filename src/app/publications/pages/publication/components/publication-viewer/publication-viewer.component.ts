import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models';

@Component({
  selector: 'app-publication-viewer',
  templateUrl: './publication-viewer.component.html',
  styleUrls: ['./publication-viewer.component.css']
})
export class PublicationViewerComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
