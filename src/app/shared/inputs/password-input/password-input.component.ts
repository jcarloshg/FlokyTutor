import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;
  public password: string = '';

  constructor() { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  writeValue(obj: any): void {
    if (obj !== undefined) return;
    this.password = obj;
    this.onChange(this.password);
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { }

}
