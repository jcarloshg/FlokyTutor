import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomValidator } from 'src/app/shared/inputs/service/customValidator.interface';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';

@Component({
  selector: 'app-register-new-account',
  templateUrl: './register-new-account.component.html',
  styleUrls: ['./register-new-account.component.css']
})
export class RegisterNewAccountComponent implements OnInit {

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
  ) {
    this.fullNameValidator = this.validatorsService.getNameValidator('name', this.formBuilder);
    this.collegeEnrollmentValidator = this.validatorsService.getCollageEnrollment('collegeEnrollment', this.formBuilder);
    this.collegeNameValidator = this.validatorsService.getCollegeName('collegeName', this.formBuilder);
    this.emailValidator = this.validatorsService.getEmailValidator('email', this.formBuilder);
    this.passValidator = this.validatorsService.getPasswordValidator('pass', this.formBuilder);
    this.ConfiPassValidator = this.validatorsService.getPasswordValidator('ConfiPass', this.formBuilder);

    this.registerAccountForm.addControl(this.fullNameValidator.name, this.fullNameValidator.formControl);
    this.registerAccountForm.addControl(this.collegeEnrollmentValidator.name, this.collegeEnrollmentValidator.formControl);
    this.registerAccountForm.addControl(this.collegeNameValidator.name, this.collegeNameValidator.formControl);
    this.registerAccountForm.addControl(this.emailValidator.name, this.emailValidator.formControl);
    this.registerAccountForm.addControl(this.passValidator.name, this.passValidator.formControl);
    this.registerAccountForm.addControl(this.ConfiPassValidator.name, this.ConfiPassValidator.formControl);
  }

  ngOnInit(): void { }


}
