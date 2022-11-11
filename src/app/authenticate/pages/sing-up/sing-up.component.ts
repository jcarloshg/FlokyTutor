import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomToast } from '../../component/custom-toast/custom-toast.inteferface';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

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

  ngOnInit(): void { }

  public async singUp() {

    const resAuth = await this.authenticateAWSService.signUp(
      {
        name: '',
        username: '',
        password: '',
        attributes: {
          email: '',
          name: ''
        }
      }
    );
    console.log({ resAuth });

  }

}
