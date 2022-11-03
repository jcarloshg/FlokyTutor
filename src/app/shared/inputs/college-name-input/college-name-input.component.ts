import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-college-name-input',
  templateUrl: './college-name-input.component.html',
  styleUrls: ['./college-name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeNameInputComponent),
      multi: true
    }
  ]
})
export class CollegeNameInputComponent implements ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public collegeName: string = '';

  constructor() { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { }
  writeValue(obj: any): void {
    this.collegeName = obj;
    this.onChange(this.collegeName);
  }

}
