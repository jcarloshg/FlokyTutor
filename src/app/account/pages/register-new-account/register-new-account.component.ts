import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// mine
import { CustomValidator } from 'src/app/shared/inputs/service/customValidator.interface';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';
import { AuthAWS } from '../../services/authAWS.service';
import { AccountSignUp } from '../../interfaces/auth-service.interface';


@Component({
  selector: 'app-register-new-account',
  templateUrl: './register-new-account.component.html',
  styleUrls: ['./register-new-account.component.css']
})
export class RegisterNewAccountComponent {

  public isLoading: boolean = false;

  public fullNameValidator: CustomValidator;
  public collegeEnrollmentValidator: CustomValidator;
  public collegeNameValidator: CustomValidator;
  public emailValidator: CustomValidator;
  public passValidator: CustomValidator;
  public ConfiPassValidator: CustomValidator;

  registerAccountForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
    private authService: AuthAWS,
  ) {
    this.fullNameValidator = this.validatorsService.getNameValidator('name', this.formBuilder);
    this.collegeEnrollmentValidator = this.validatorsService.getCollageEnrollment('collegeEnrollment', this.formBuilder);
    this.collegeNameValidator = this.validatorsService.getCollegeName('collegeName', this.formBuilder);
    this.emailValidator = this.validatorsService.getEmailValidator('email', this.formBuilder);
    this.passValidator = this.validatorsService.getPasswordValidator('pass', this.formBuilder);
    this.ConfiPassValidator = this.validatorsService.getPasswordValidator('confiPass', this.formBuilder);

    this.registerAccountForm.addControl(this.fullNameValidator.name, this.fullNameValidator.formControl);
    this.registerAccountForm.addControl(this.collegeEnrollmentValidator.name, this.collegeEnrollmentValidator.formControl);
    this.registerAccountForm.addControl(this.collegeNameValidator.name, this.collegeNameValidator.formControl);
    this.registerAccountForm.addControl(this.emailValidator.name, this.emailValidator.formControl);
    this.registerAccountForm.addControl(this.passValidator.name, this.passValidator.formControl);
    this.registerAccountForm.addControl(this.ConfiPassValidator.name, this.ConfiPassValidator.formControl);

    this.registerAccountForm.reset({
      'name': 'Fernanda Reyes Gonzales',
      'collegeEnrollment': '201738087',
      'collegeName': 'Benemérita Universidad Autónoma de Puebla',
      'email': 'jcarloshg9898@gmail.com',
      // 'pass': 'Qazwsx123',
      'confiPass': 'Qazwsx123',
    })
  }

  async registerNewAccount() {

    const isValid: boolean = this.registerAccountForm.valid;

    if (isValid == false) {
      this.registerAccountForm.markAllAsTouched();
      return;
    }

    const accountSignUp: AccountSignUp = {
      name: this.registerAccountForm.get('name')?.value,
      username: this.registerAccountForm.get('email')?.value,
      password: this.registerAccountForm.get('pass')?.value,
      attributes: {
        email: this.registerAccountForm.get('email')?.value,
        name: this.registerAccountForm.get('name')?.value
      }
    }

    const rest = await this.authService.signUp(accountSignUp);
    console.log("🚀 ~ file: register-new-account.component.ts ~ line 67 ~ RegisterNewAccountComponent ~ registerNewAccount ~ rest", rest)
  }

}
