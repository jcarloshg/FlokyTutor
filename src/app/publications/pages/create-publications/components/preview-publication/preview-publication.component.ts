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

    const isValidPost =
      this.inputCreatePost.isValidTitle &&
      this.inputCreatePost.isValidCategory &&
      this.inputCreatePost.body;

    if (isValidPost == false) {

      let messageError = '';
      if (this.inputCreatePost.isValidBody == false) messageError = 'El "cuerpo de la publicación" es invalido';
      if (this.inputCreatePost.isValidCategory == false) messageError = 'Selecciona una "categoría"';
      if (this.inputCreatePost.isValidTitle == false) messageError = 'El "titulo de la publicación" es invalido';

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
