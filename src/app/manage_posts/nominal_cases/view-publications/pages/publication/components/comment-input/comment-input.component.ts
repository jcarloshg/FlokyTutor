import { Component, Input } from '@angular/core';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';
import { ViewPostsService } from '../../../../service/view-posts.service';

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
    private viewPostService: ViewPostsService,
  ) { }

  public async commentPost() {

    try {

      if (this.commentBody == '') return;

      const tutorAuthor = await this.viewPostService.getCurrentTutorLogged();
      const commentPostResponse = await this.viewPostService.commentPost(
        {
          body: this.commentBody,
          postID: this.postIdToComment,
          author: tutorAuthor!,
        }
      );
      const wasCreatedNewComment = commentPostResponse !== null;
      if (wasCreatedNewComment == true) this.commentBody = '';

    } catch (error) {
      this.customToastService.launchToast({ typeToast: 'error', message: "Ocurrió un error. Inténtalo mas tarde. :(" })
    }

  }

}
