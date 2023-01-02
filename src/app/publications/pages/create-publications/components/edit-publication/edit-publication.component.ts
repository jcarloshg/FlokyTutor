import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputCreatePost } from '../../models/publication';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-publication',
  templateUrl: './edit-publication.component.html',
  styleUrls: ['./edit-publication.component.css']
})
export class EditPublicationComponent {

  public publicationForm: FormGroup;
  public data = '<p>Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor.</p><p><br></p><p>Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.</p><p><br></p><h2>Ea qui nostrud nostrud officia</h2><p>fugiat voluptate dolore minim elit laboris qui ut mollit laboris. Nulla proident proident proident et consequat nisi ipsum eiusmod duis ut est reprehenderit. Id do et quis aute commodo ea cillum sunt.</p><p><br></p><p><span style="color: rgb(230, 0, 0);">Et adipisicing dolore tempor eiusmod culpa ad sint consequat ipsum eu quis. Ut laboris laboris et qui aliqua veniam enim fugiat laborum.</span></p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/9rLc_brC8DY?showinfo=0"></iframe><p><span style="color: rgb(230, 0, 0);"><span class="ql-cursor">﻿</span></span></p>';
  @Input() inputCreatePost: InputCreatePost;
  @Output() viewPreview = new EventEmitter<InputCreatePost>();

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.publicationForm = this.formBuilder.group({
      title: [''],
      body: [''],
    });

    this.inputCreatePost = { title: '', body: '' };

    this.publicationForm.reset({
      title: 'Como decir la hora en ingles',
      body: '<p>Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor.</p><p><br></p><p>Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.Adipisicing culpa eu laborum sit aliquip laboris sit Lorem velit minim tempor magna tempor. Excepteur non eiusmod nostrud in do sunt duis irure.</p><p><br></p><h2>Ea qui nostrud nostrud officia</h2><p>fugiat voluptate dolore minim elit laboris qui ut mollit laboris. Nulla proident proident proident et consequat nisi ipsum eiusmod duis ut est reprehenderit. Id do et quis aute commodo ea cillum sunt.</p><p><br></p><p><span style="color: rgb(230, 0, 0);">Et adipisicing dolore tempor eiusmod culpa ad sint consequat ipsum eu quis. Ut laboris laboris et qui aliqua veniam enim fugiat laborum.</span></p><p><br></p><iframe class="ql-video" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/9rLc_brC8DY?showinfo=0"></iframe><p><span style="color: rgb(230, 0, 0);"><span class="ql-cursor">﻿</span></span></p>'
    });
  }

  public getFormControl(name: string): FormControl {
    return this.publicationForm.get(name) as FormControl;
  }

  seePreview() {

    this.inputCreatePost = {
      title: this.publicationForm.get('title')?.value,
      body: this.publicationForm.get('body')?.value
    }

    console.log(this.inputCreatePost);

    this.viewPreview.emit(this.inputCreatePost);
  }

}
