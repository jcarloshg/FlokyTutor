import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group(
      {
        fullName:
          [
            '',
            [
              Validators.required,
              Validators.pattern("^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$"),
            ]
          ]
      }
    );
  }

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

}
