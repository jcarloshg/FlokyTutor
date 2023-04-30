import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/services/validator.service';
import { AuthenticateAWSService } from '../../services/authenticate-aws.service';
import { CustomToastService } from '../../../shared/services/custom-toast.service';
import { createActivities, createTopics, getAllTopics } from 'scripts/root';

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
      email: 'jcarloshg9898@gmail.com',
      pass: 'Qazwsx123',
    })
  }

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  ngOnInit(): void { }

  public async login() {

    // await createTopics();     // 1
    // await getAllTopics();     // 2
    // await createActivities(); // 3
    // return;


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
      this.customToastService.launchToast({ typeToast: 'error', message: signInResponse.message ?? 'Ocurrió un error inesperado' });
      return;
    }

    this.customToastService.launchToast({ typeToast: 'success', message: signInResponse.message! });
    this.router.navigate(['./incio']);

  }

}
