import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NameInputComponent } from '../name-input/name-input.component';

@Component({
  selector: 'app-college-enrollment-input',
  templateUrl: './college-enrollment-input.component.html',
  styleUrls: ['./college-enrollment-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeEnrollmentInputComponent),
      multi: true
    }
  ]
})
export class CollegeEnrollmentInputComponent implements OnInit, ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public collegeEnrollment: string = '';

  constructor() { }

  ngOnInit(): void { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  writeValue(obj: any): void {
    if (obj !== undefined) return;
    this.collegeEnrollment = obj;
    this.onChange(this.collegeEnrollment);
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { }

}
