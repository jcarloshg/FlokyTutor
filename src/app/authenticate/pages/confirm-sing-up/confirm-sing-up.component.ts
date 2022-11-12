import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validators/validator.service';

@Component({
  selector: 'app-confirm-sing-up',
  templateUrl: './confirm-sing-up.component.html',
  styleUrls: ['./confirm-sing-up.component.css']
})
export class ConfirmSingUpComponent implements OnInit {

  public confirmSingUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    public authenticateAWSService: AuthenticateAWSService,
  ) {
    this.confirmSingUpForm = this.formBuilder.group(
      {
        codeVerification: ['', validatorService.codeVerificationCustomValidator.getValidators()],
      }
    )
  }

  public getFormControl(name: string): FormControl {
    return this.confirmSingUpForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

}
