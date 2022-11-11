import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../services/validators/validator.service';

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
    // const emailCustomValidator = this.validatorService.emailCustomValidator;

    this.loginForm = this.formBuilder.group({
      email: ['', emailCustomValidator.getValidators()],
      pass:
        [
          '',
          [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9._%+-]{6,}$"),
          ]
        ],
    });
  }

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

}
