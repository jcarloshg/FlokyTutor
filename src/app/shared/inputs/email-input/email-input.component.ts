import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class EmailInputComponent implements ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public email: string = '';

  constructor() { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.email = obj;
    this.onChange(this.email);
  }
  setDisabledState?(isDisabled: boolean): void { }

}
