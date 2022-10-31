import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  logIn() {
    console.log(this.loginForm.get('email')?.errors);
  }

}
