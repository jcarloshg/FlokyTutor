import { Component } from '@angular/core';
import { CreatePostService } from './service/view-post.service';
import { InputCreatePost } from './models/publication';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
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
    private createPostService: CreatePostService,
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

    const currentTutorLogged = await this.createPostService.getCurrentTutorLogged();
    if (!currentTutorLogged) {
      this.customToastService.launchToast({ typeToast: 'error', message: 'Ocurrió un error inesperado. :(' });
      return;
    }

    const postTitle = inputCreatePost.title;
    const postCategory = inputCreatePost.category;
    const postBody = inputCreatePost.body;
    const tutorID = currentTutorLogged!.id;

    const postCreated = await this.createPostService.createPost({
      title: postTitle,
      category: postCategory,
      body: postBody,
      tutorAccountID: tutorID,
    });

    const wasCreatedPost = postCreated ? true : false;

    if (wasCreatedPost == false) {
      this.customToastService.launchToast({ typeToast: 'error', message: "Ocurrió un error. Inténtalo mas tarde." });
      return;
    }


    this.customToastService.launchToast({ typeToast: 'success', message: `La publicación "${inputCreatePost.title}" se a creado con éxito!`, seconds: 5 });
    this.router.navigate(['./incio/publicaciones/ver_publicaciones']);

  }

}
