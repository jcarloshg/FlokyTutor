import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputCreatePost } from '../../models/publication';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';

@Component({
  selector: 'app-preview-publication',
  templateUrl: './preview-publication.component.html',
  styleUrls: ['./preview-publication.component.css']
})
export class PreviewPublicationComponent {

  @Input() inputCreatePost!: InputCreatePost;
  @Output() viewEditPublication = new EventEmitter();
  @Output() createPublicationEvent = new EventEmitter();

  constructor(
    public customToastService: CustomToastService,
  ) { }

  public seeEditPost() {
    this.viewEditPublication.emit();
  }

  public createPublication() {

    const isValidPost = this.inputCreatePost.isValidTitle && this.inputCreatePost.body;

    if (isValidPost == false) {
      const messageError = this.inputCreatePost.isValidTitle == false
        ? 'El "titulo" es invalido"'
        : 'El "cuerpo de la publicación" es invalido"';
      this.customToastService.launchToast({
        typeToast: 'error',
        message: messageError,
        seconds: 5
      });
      return;
    }

    this.createPublicationEvent.emit();
  }

}
