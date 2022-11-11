import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomToast } from '../../component/custom-toast/custom-toast.inteferface';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { AccountSignUp } from '../../../../domain/useCases/authenticate.useCase.interface';
import { EagerAccount, Role } from 'src/models';
import { ValidatorService } from '../../services/validators/validator.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {

  public singUpForm: FormGroup;
  public messageToast: CustomToast;

  constructor(
    private formBuilder: FormBuilder,
    public authenticateAWSService: AuthenticateAWSService,
    private validatorService: ValidatorService,
  ) {
    this.singUpForm = this.formBuilder.group(
      {
        // fullName: ['', [Validators.required, Validators.pattern("^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$"),]],
        fullName: [
          '',
          [
            Validators.required,
            this.validatorService.nameCustomValidator.namesValidatorFunc,
          ],
        ],
        collegeName: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}( {1,2}[a-zA-ZÀ-ÿ]{2,}){2,}$'),]],
        collegeEnrollment: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{4,}$'),]],
        email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),]],
        pass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]{6,}$"),]],
        confiPass: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]{6,}$"),]],
      },
      {
        validators: [this.areTheSamePass]
      }
    );

    this.messageToast = {
      typeToast: 'success',
      message: '',
    }

    this.singUpForm.reset({
      fullName: 'Jose ',
      collegeName: 'Benemérita Universidad Autónoma de Puebla',
      collegeEnrollment: '201738087',
      email: 'carlosj12336@gmail.com',
      pass: 'Qazwsx123',
      confiPass: 'Qazwsx123',
    });
  }

  areTheSamePass(formGroup: AbstractControl): ValidationErrors | null {
    const pass = formGroup.get('pass')?.value;
    const confiPass = formGroup.get('confiPass')?.value;

    // if (pass !== confiPass) return { areTheSamePass: false }

    if (pass !== confiPass) {
      formGroup.get('confiPass')?.setErrors({ areTheSamePass: false });
      return { areTheSamePass: true };
    }

    return null;
  }

  public getFormControl(name: string): FormControl {
    return this.singUpForm.get(name) as FormControl;
  }

  public async singUp() {

    if (this.singUpForm.valid == false) {
      this.singUpForm.markAllAsTouched();
      this.messageToast = { typeToast: 'error', message: 'Los datos no son validos' };
      return;
    }

    const singUpResponse = await this.authenticateAWSService.signUp(
      {
        fullName: this.singUpForm.get('fullName')?.value,
        collegeName: this.singUpForm.get('collegeName')?.value,
        role: Role.TEACHER,
        collegeEnrollment: this.singUpForm.get('collegeEnrollment')?.value,
        email: this.singUpForm.get('email')?.value,
        pass: this.singUpForm.get('pass')?.value,
      }
    );

    if (singUpResponse.isOk == false) {
      this.messageToast = { typeToast: 'error', message: singUpResponse.message ?? 'Ocurrio un error inesperado' };
      return;
    }

    this.messageToast = { typeToast: 'success', message: singUpResponse.message ?? 'Todo cool! :)' };
    // this.router.navigate(['./cuenta/confirmar_cuenta']);

  }


}


