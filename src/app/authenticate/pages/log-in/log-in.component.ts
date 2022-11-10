import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ]
    ],
    pass: [
      '',
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._%+-]{3,}$"),
      ]
    ],
  });

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

}
