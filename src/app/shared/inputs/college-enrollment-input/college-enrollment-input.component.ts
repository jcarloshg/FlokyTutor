import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
export class CollegeEnrollmentInputComponent implements ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public collegeEnrollment: string = '';

  constructor() { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.collegeEnrollment = obj;
    this.onChange(this.collegeEnrollment);
  }
  setDisabledState?(isDisabled: boolean): void { }

}
