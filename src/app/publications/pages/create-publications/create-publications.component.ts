import { Component, OnInit } from '@angular/core';
import { InputCreatePost } from './models/publication';
import { PublicationAWSService } from '../../service/publication-aws.service';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { Account } from 'src/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent {

  public inputCreatePost: InputCreatePost;

  constructor(
    private router: Router,
    public publicationAWSService: PublicationAWSService,
    public authenticateAWSService: AuthenticateAWSService,
    public customToastService: CustomToastService,
  ) {
    this.inputCreatePost = {
      title: '',
      body: '',
      category: "LISTENING",
      isValidTitle: false,
      isValidCategory: false,
      isValidBody: false
    };
  }

  public async createPost(inputCreatePost: InputCreatePost) {

    const getCurrentTutorResponse = await this.authenticateAWSService.getCurrentTutor();
    const currentTutor = getCurrentTutorResponse.data as Account;

    const postTitle = inputCreatePost.title;
    const postBody = inputCreatePost.body;
    const tutorID = currentTutor.id;

    const createPostResponse = await this.publicationAWSService.createPost({
      tutorAccountID: tutorID,
      title: postTitle,
      body: postBody,
    });

    if (createPostResponse.isOk == false) {
      this.customToastService.launchToast({ typeToast: 'error', message: createPostResponse.message! });
      return;
    }

    this.customToastService.launchToast({ typeToast: 'success', message: createPostResponse.message!, seconds: 5 });
    this.router.navigate(['./incio/publicaciones/ver_publicaciones']);

  }

}
