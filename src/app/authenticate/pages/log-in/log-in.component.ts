import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validators/validator.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
  ) {

    const emailCustomValidator = this.validatorService.emailCustomValidator;
    const passwordCustomvalidator = this.validatorService.passwordCustomvalidator;

    this.loginForm = this.formBuilder.group(
      {
        email: ['', emailCustomValidator.getValidators()],
        pass: ['', passwordCustomvalidator.getValidators()],
      }
    );
  }

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

}
