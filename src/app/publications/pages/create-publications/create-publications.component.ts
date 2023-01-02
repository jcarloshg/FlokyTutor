import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InputCreatePost } from './models/publication';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent {

  public publicationForm: FormGroup;
  public inputCreatePost: InputCreatePost;
  public isSeePreview: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.publicationForm = this.formBuilder.group({
      title: [''],
      body: [''],
    });

    this.inputCreatePost = { title: '', body: '' };
  }

  public getFormControl(name: string): FormControl {
    return this.publicationForm.get(name) as FormControl;
  }

  public seePreview() {
    this.inputCreatePost.title = this.publicationForm.get('title')?.value ?? "";
    this.inputCreatePost.body = this.publicationForm.get('body')?.value ?? "";

    this.isSeePreview = true;
  }

  public seeEditPost() {
    this.isSeePreview = false;
  }

  getTitleValue(): string {
    const title = this.publicationForm.get('title')?.value ?? 'NOT_TITLE';
    return title as string;
  }

  getBodyValue(): string {
    const body = this.publicationForm.get('body')?.value ?? 'NOT_BODY';
    return body as string;
  }

  public printForm() {
    console.log(this.publicationForm.get('title')?.value ?? 'NOT_TITLE');
    console.log(this.publicationForm.get('body')?.value ?? 'NOT_BODY');
  }

}
