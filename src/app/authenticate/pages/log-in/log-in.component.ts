import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });

  public getFormControl(name: string): FormControl {
    return this.loginForm.get(name) as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }

}
