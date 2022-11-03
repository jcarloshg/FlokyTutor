import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// mine
import { CustomValidator } from 'src/app/shared/inputs/service/customValidator.interface';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';
import { Login } from '../../interfaces/auth-service.interface';
import { AuthAWS } from '../../services/authAWS.service';


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
    private validatorsService: ValidatorsService,
    private authService: AuthAWS,
  ) {

    this.emailValidator = this.validatorsService.getEmailValidator('email', this.formBuilder);
    this.passValidator = this.validatorsService.getPasswordValidator('pass', this.formBuilder);

    this.loginForm.addControl(this.emailValidator.name, this.emailValidator.formControl);
    this.loginForm.addControl(this.passValidator.name, this.passValidator.formControl);
  }

  logIn() {
    const login: Login = {
      username: this.loginForm.get(this.emailValidator.name)?.value,
      password: this.loginForm.get(this.passValidator.name)?.value
    }
    this.authService.signIn(login);
  }

}
