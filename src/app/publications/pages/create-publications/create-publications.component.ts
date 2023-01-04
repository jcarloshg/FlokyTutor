import { Component, ViewChild } from '@angular/core';
import { InputCreatePost } from './models/publication';
import { ConfirmationModalService } from 'src/app/shared/services/confirmation-modal.service';
import { PublicationAWSService } from '../../service/publication-aws.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent {

  @ViewChild(ConfirmationDialogComponent, { static: true }) confirmationDialog!: ConfirmationDialogComponent;
  public isSeePreview: boolean = false;
  public inputCreatePost: InputCreatePost = { title: '', body: '' };

  constructor(
    public confirmationModalService: ConfirmationModalService,
    public publicationAWSService: PublicationAWSService,
  ) { }

  public seePreview(inputCreatePost: InputCreatePost) {
    this.inputCreatePost = inputCreatePost;
    this.isSeePreview = true;
  }

  public seeEditPost() {
    this.isSeePreview = false;
  }

  public async createPost() {

    this.confirmationDialog.launch({
      title: 'New post',
      message: 'want to create a new post?',
    });

    return;

    const postTitle = this.inputCreatePost.title;
    const postBody = this.inputCreatePost.body;
    const tutorID = '2952e84f-915f-483e-bcc8-a332e374424b';

    const createPostResponse = await this.publicationAWSService.createPost({
      tutorAccountID: tutorID,
      title: postTitle,
      body: postBody,
    });

    console.log(createPostResponse);

  }


  // public async lunchConfirmationModal() {
  //   await this.createPost()
  //   // this.confirmationModalService.launch({
  //   //   title: 'Nueva publicación',
  //   //   message: '¿Deseas crear una nueva publicación?',
  //   //   functionAccept: this.createPost,
  //   //   functionCancel: () => { }
  //   // });
  // }

}
