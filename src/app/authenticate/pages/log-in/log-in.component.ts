import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.loginForm = this.formBuilder.group({
      email:
        [
          '',
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ]
        ],
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
