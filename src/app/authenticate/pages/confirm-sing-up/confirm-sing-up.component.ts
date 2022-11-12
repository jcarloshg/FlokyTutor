import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-sing-up',
  templateUrl: './confirm-sing-up.component.html',
  styleUrls: ['./confirm-sing-up.component.css']
})
export class ConfirmSingUpComponent {

  public confirmSingUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    public customToastService: CustomToastService,
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

  async confirmSignUp() {

    if (this.confirmSingUpForm.valid == false) {
      this.confirmSingUpForm.markAllAsTouched();
      return;
    }

    const codeParam = this.confirmSingUpForm.get('codeVerification')?.value.toString();
    const emailParam = this.authenticateAWSService.signUpParams!.email;
    const confirmSignUpResponse = await this.authenticateAWSService.confirmSignUp({
      code: codeParam,
      email: emailParam,
    });

    if (confirmSignUpResponse.isOk == false) {
      this.customToastService.launchToast({ typeToast: 'error', message: confirmSignUpResponse.message ?? 'Ocurrio un error inesperado' });
      return;
    }

    this.customToastService.launchToast({ typeToast: 'success', message: confirmSignUpResponse.message ?? 'Todo salio bien :)' });
    this.router.navigate(['./cuenta/ingresar'])

  }

}
