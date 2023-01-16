import { Component, Input } from '@angular/core';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';
import { ViewPostService } from "src/app/manage_posts/service/view-post.service";
@Component({
  selector: 'app-comment-input',
  templateUrl: './comment-input.component.html',
  styleUrls: ['./comment-input.component.css']
})
export class CommentInputComponent {

  @Input() public postIdToComment!: string;
  public commentBody: string = '';

  constructor(
    private customToastService: CustomToastService,
    private viewPostService: ViewPostService,
  ) { }

  public async commentPost() {

    const isEmptyComment = this.commentBody == '';
    if (isEmptyComment == true) {
      this.customToastService.launchToast({ typeToast: 'error', message: 'El "campo del comentario" esta vació' })
      return;
    }

    try {

      const tutorAuthor = await this.viewPostService.getCurrentTutorLogged();
      if (tutorAuthor == null) {
        this.customToastService.launchToast({ typeToast: 'error', message: 'Ocurrió un error inesperado.' })
        return;
      }

      const commentPostResponse = await this.viewPostService.commentPost({
        body: this.commentBody,
        postID: this.postIdToComment,
        author: tutorAuthor,
      });

      const wasCreatedNewComment = commentPostResponse == true;

      if (wasCreatedNewComment == true) {
        this.customToastService.launchToast({ typeToast: 'success', message: "Comentario registrado. :)" });
        this.commentBody = '';
        return;
      }

      this.customToastService.launchToast({ typeToast: 'error', message: "Ocurrió un error. Inténtalo mas tarde. :(" })

    } catch (error) {

      this.customToastService.launchToast({ typeToast: 'error', message: "Ocurrió un error. Inténtalo mas tarde. :(" })
    }

  }

}
