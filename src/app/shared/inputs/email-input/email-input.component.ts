import { Component, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements ControlValueAccessor, OnChanges {

  @Input() formControlEmail: ValidationErrors | null = null;
  public email: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  writeValue(obj: any): void {
    if (obj !== undefined) return;
    this.email = obj;
    this.onChange(this.email);
  }

  registerOnChange(fn: any): void { this.onChange = fn; }

  registerOnTouched(fn: any): void { this.onTouched = fn; }

  setDisabledState?(isDisabled: boolean): void { }

}
