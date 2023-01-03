import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputCreatePost } from '../../models/publication';

@Component({
  selector: 'app-preview-publication',
  templateUrl: './preview-publication.component.html',
  styleUrls: ['./preview-publication.component.css']
})
export class PreviewPublicationComponent implements OnInit {

  @Input() inputCreatePost!: InputCreatePost;
  @Output() viewEditPublication = new EventEmitter();
  @Output() createPublicationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public seeEditPost() {
    this.viewEditPublication.emit();
  }

  public createPublication() {
    this.createPublicationEvent.emit();
  }

}
