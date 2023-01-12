import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputCreatePost } from '../../models/publication';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent implements OnInit {

  public publicationForm: FormGroup;
  @Input() inputCreatePost!: InputCreatePost;
  @Output() viewPreviewEvent = new EventEmitter<InputCreatePost>();

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {
    this.publicationForm = this.formBuilder.group({
      title: ['', validatorService.postTitle.getValidators()],
      category: ['', validatorService.postCategory.getValidators()],
      body: ['', validatorService.postBody.getValidators()],
    });
  }

  ngOnInit(): void {
    this.publicationForm.reset({
      title: this.inputCreatePost.title,
      category: this.inputCreatePost.category,
      body: this.inputCreatePost.body,
    });
  }

  public getFormControl(name: string): FormControl {
    return this.publicationForm.get(name) as FormControl;
  }

  public seePreview() {

    this.viewPreviewEvent.emit({
      title: this.publicationForm.get('title')?.value ?? '',
      body: this.publicationForm.get('body')?.value ?? '',
      category: this.publicationForm.get('category')?.value ?? '',
      isValidTitle: this.publicationForm.get('title')?.valid ?? false,
      isValidCategory: this.publicationForm.get('category')?.valid ?? false,
      isValidBody: this.publicationForm.get('body')?.valid ?? false,
    })

  }

}
