import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent implements OnInit {

  public publicationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.publicationForm = this.formBuilder.group({
      title: [''],
      body: [''],
    });

    this.publicationForm.reset({
      title: 'Formas de decir gracias',
      body: 'welcome :)'
    })
  }


  public getFormControl(name: string): FormControl {
    return this.publicationForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

}
