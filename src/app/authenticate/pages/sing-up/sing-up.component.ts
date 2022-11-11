import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomToast } from '../../component/custom-toast/custom-toast.inteferface';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { AccountSignUp } from '../../../../domain/useCases/authenticate.useCase.interface';
import { EagerAccount } from 'src/models';

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
  ) {
    this.singUpForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, Validators.pattern("^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$"),]],
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
      fullName: 'Jose Carlos Huerta Garcia',
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
    if (pass !== confiPass) return { areTheSamePass: false }
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

    const singUpParam: AccountSignUp = {
      name: this.singUpForm.get('fullName')?.value,
      username: this.singUpForm.get('email')?.value,
      password: this.singUpForm.get('pass')?.value,
      attributes: {
        email: this.singUpForm.get('email')?.value,
        name: this.singUpForm.get('fullName')?.value
      }
    }

    const accountParam: EagerAccount = {
      id: '',
      fullName: this.singUpForm.get('fullName')?.value,
      email: this.singUpForm.get('email')?.value,
      collegeEnrollment: this.singUpForm.get('collegeEnrollment')?.value,
      collegeName: this.singUpForm.get('collegeName')?.value,
    };

    const resAuth = await this.authenticateAWSService.signUp(singUpParam, accountParam);

  }


}


