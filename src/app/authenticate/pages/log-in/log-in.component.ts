import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
    public customToastService: CustomToastService,
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

    this.loginForm.reset({
      email: 'carlosj12336@gmail.com',
      pass: 'Qazwsx123',
    })
  }

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

  public async login() {

    if (this.loginForm.valid == false) {
      this.loginForm.markAllAsTouched();
      this.customToastService.launchToast({ typeToast: 'error', message: 'Los datos no son validos' });
      return;
    }

    const signInResponse = await this.authenticateAWSService.signIn({
      username: this.loginForm.get('email')!.value,
      password: this.loginForm.get('pass')!.value,
    });

    if (signInResponse.isOk == false) {
      this.customToastService.launchToast({ typeToast: 'error', message: signInResponse.message ?? 'Ocurrio un error inesperado' });
      return;
    }

    this.customToastService.launchToast({ typeToast: 'success', message: signInResponse.message! });
    this.router.navigate(['./actividades'])

  }

}
