import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { Role } from 'src/models';
import { ValidatorService } from '../../../shared/services/validator.service';
import { Router } from '@angular/router';
import { CustomToastService } from 'src/app/shared/services/custom-toast.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  public singUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    public authenticateAWSService: AuthenticateAWSService,
    public customToastService: CustomToastService,
  ) {
    this.singUpForm = this.formBuilder.group(
      {
        fullName: ['', validatorService.fullNameCustomValidator.getValidators()],
        collegeName: ['', validatorService.collegeNameCustomValidator.getValidators()],
        collegeEnrollment: ['', validatorService.collegeEnrollmentCustomValidator.getValidators()],
        email: ['', validatorService.emailCustomValidator.getValidators()],
        password: ['', validatorService.passwordCustomvalidator.getValidators()],
        confirmationPassword: ['', validatorService.passwordCustomvalidator.getValidators()],
      },
      {
        validators: [this.validatorService.passwordCustomvalidator.areTheSamePass]
      }
    );

    this.singUpForm.reset({
      fullName: 'Jose Carlos Huerta Garcia',
      collegeName: 'Benemérita Universiada Autonoma de Puebla',
      collegeEnrollment: '201738087',
      email: 'carlosj12336@gmail.com',
      password: 'Qazwsx123',
      confirmationPassword: 'Qazwsx123',
    });
  }


  public getFormControl(name: string): FormControl {
    return this.singUpForm.get(name) as FormControl;
  }

  public async singUp() {

    if (this.singUpForm.valid == false) {
      this.singUpForm.markAllAsTouched();
      this.customToastService.launchToast({ typeToast: 'error', message: 'Los datos no son validos' });
      return;
    }

    const singUpResponse = await this.authenticateAWSService.signUp(
      {
        fullName: this.singUpForm.get('fullName')?.value,
        collegeName: this.singUpForm.get('collegeName')?.value,
        role: Role.TEACHER,
        collegeEnrollment: this.singUpForm.get('collegeEnrollment')?.value,
        email: this.singUpForm.get('email')?.value,
        pass: this.singUpForm.get('password')?.value,
      }
    );

    // if (singUpResponse.isOk == false) {
    //   this.customToastService.launchToast({ typeToast: 'error', message: singUpResponse.message ?? 'Ocurrio un error inesperado' });
    //   return;
    // }

    this.customToastService.launchToast({ typeToast: 'success', message: singUpResponse.message ?? 'Todo cool! :)' });
    this.router.navigate(['./cuenta/confirmar_nueva_cuenta'])

  }


}


