import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() comment!: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
