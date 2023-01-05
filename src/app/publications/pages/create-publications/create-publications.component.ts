import { Component, ViewChild, OnInit } from '@angular/core';
import { InputCreatePost } from './models/publication';
import { ConfirmationModalService } from 'src/app/shared/services/confirmation-modal.service';
import { PublicationAWSService } from '../../service/publication-aws.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ActionsDialogs } from './components/confirmation-dialog/ActionsDialogs.interface';
import { ConfirmationDialog } from './components/confirmation-dialog/ConfirmationDialog.interface';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent implements OnInit {

  @ViewChild(ConfirmationDialogComponent, { static: true }) confirmationDialog!: ActionsDialogs<ConfirmationDialog>;
  public isSeePreview: boolean = false;
  public inputCreatePost: InputCreatePost = { title: '', body: '' };

  public posts = [];

  constructor(
    public confirmationModalService: ConfirmationModalService,
    public publicationAWSService: PublicationAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    const searchPostsResponse = await this.publicationAWSService.searchPosts({ byTitle: '', byDate: '' });
    this.posts = searchPostsResponse.data;
  }

  public seePreview(inputCreatePost: InputCreatePost) {
    this.inputCreatePost = inputCreatePost;
    this.isSeePreview = true;
  }

  public seeEditPost() {
    this.isSeePreview = false;
  }

  public async launchDialogConfirmation() {
    this.confirmationDialog.launch({
      title: 'Hello',
      message: 'body'
    });
  }

  public async createPost(eventResponse: boolean) {

    if (eventResponse == false) return;

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

}
