import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { InputCreatePost } from '../../models/publication';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialog } from '../confirmation-dialog/ConfirmationDialog.interface';
import { ActionsDialogs } from '../confirmation-dialog/ActionsDialogs.interface';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit {

  @ViewChild(ConfirmationDialogComponent, { static: true }) confirmationDialog!: ActionsDialogs<ConfirmationDialog>;
  @Input() inputCreatePost!: InputCreatePost;
  @Output() createPostEvent = new EventEmitter<InputCreatePost>();
  public isSeePreview: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public seePreview(inputCreatePost: InputCreatePost) {
    this.inputCreatePost = inputCreatePost;
    this.isSeePreview = true;
  }

  public seeEditPost() {
    this.isSeePreview = false;
  }

  public async launchDialogConfirmation() {
    this.confirmationDialog.launch({
      title: 'Nueva publicación',
      message: '¿Deseas crear una nueva publicación?'
    });
  }

  public createPost(eventResponse: boolean) {
    this.createPostEvent.emit(this.inputCreatePost);
  }

}
