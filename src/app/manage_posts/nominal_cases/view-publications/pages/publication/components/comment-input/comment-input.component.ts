import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent implements OnInit {

  @Input() postIdToComment!: string;

  constructor() { }

  ngOnInit(): void { }

}
