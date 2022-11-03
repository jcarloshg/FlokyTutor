import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/inputs/service/CustomValidator';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  public emailValidator: CustomValidator;
  public passValidator: CustomValidator;
  loginForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {

    this.emailValidator = this.validatorsService.getEmailValidator('email', this.formBuilder);
    this.passValidator = this.validatorsService.getPasswordValidator('pass', this.formBuilder);

    this.loginForm.addControl(this.emailValidator.name, this.emailValidator.formControl);
    this.loginForm.addControl(this.passValidator.name, this.passValidator.formControl);
  }

  logIn() {
    console.log("🚀 ~ file: login.component.ts ~ line 54 ~ LoginComponent ~ logIn ~ this.loginForm.value", this.loginForm.value)
  }

}
