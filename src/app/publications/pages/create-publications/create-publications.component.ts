import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InputCreatePost } from './models/publication';
import { ConfirmationModalService } from 'src/app/shared/services/confirmation-modal.service';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent {

  public isSeePreview: boolean = false;
  public inputCreatePost: InputCreatePost = { title: '', body: '' };

  constructor(
    public confirmationModalService: ConfirmationModalService,
  ) { }

  public seePreview(inputCreatePost: InputCreatePost) {
    this.inputCreatePost = inputCreatePost;
    this.isSeePreview = true;
  }

  public seeEditPost() {
    this.isSeePreview = false;
  }

  public lunchConfirmationModal() {
    this.confirmationModalService.launch({
      title: 'Nueva publicación',
      message: '¿Deseas crear una nueva publicación?',
      functionAccept: this.createPost,
      functionCancel: () => { }
    });
  }

  public async createPost() {
    await console.log('CREATE POST');
  }

}
