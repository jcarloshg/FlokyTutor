import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.minLength(2), Validators.email]],
    pass: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  getErrorFromFormControl(nameFormControl: string) {
    return this.loginForm.get(nameFormControl)?.errors;
  }

  logIn() {
    // // console.log(this.loginForm.get('email')?.errors);
    // const loginFormControl = this.loginForm.get('email');
    // console.log(loginFormControl);


    const loginValue = this.loginForm.get('email')
    console.log(loginValue);

  }

}
