import { Component, OnInit } from '@angular/core';
import { InputCreatePost } from './models/publication';
import { PublicationAWSService } from '../../service/publication-aws.service';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent implements OnInit {

  public inputCreatePost: InputCreatePost;
  public posts = [];

  constructor(
    public publicationAWSService: PublicationAWSService,
    public authenticateAWSService: AuthenticateAWSService,
    public customToastService: CustomToastService,
  ) {
    this.inputCreatePost = {
      title: '',
      body: '',
      isValidTitle: false,
      isValidBody: false
    };
  }

  async ngOnInit(): Promise<void> {
    const searchPostsResponse = await this.publicationAWSService.searchPosts({ byTitle: '', byDate: '' });
    this.posts = searchPostsResponse.data;
  }

  public async createPost(inputCreatePost: InputCreatePost) {

    const isValidPost = inputCreatePost.isValidTitle && inputCreatePost.body;
    if (isValidPost == false) {
      const messageError = inputCreatePost.isValidTitle == false
        ? 'El "titulo" es invalido"'
        : 'El "cuerpo de la publicación" es invalido"';
      this.customToastService.launchToast({ typeToast: 'error', message: messageError });
      return;
    }

    const getCurrentTutorResponse = await this.authenticateAWSService.getCurrentTutor();
    const currentTutor = getCurrentTutorResponse.data as Account;

    const postTitle = this.inputCreatePost.title;
    const postBody = this.inputCreatePost.body;
    const tutorID = currentTutor.id;

    const createPostResponse = await this.publicationAWSService.createPost({
      tutorAccountID: tutorID,
      title: postTitle,
      body: postBody,
    });

    console.log({ createPostResponse });
  }

}
