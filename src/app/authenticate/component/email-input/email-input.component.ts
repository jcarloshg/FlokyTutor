import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { CustomInput } from '../custom-input.interface';

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
export class EmailInputComponent implements ControlValueAccessor, CustomInput {

  @Input() formControl!: FormControl;
  public email: string = '';
  public messagesError: Map<string, string>;

  constructor() {
    this.messagesError = new Map()
      .set('required', "Correo electrónico es requerido.")
      .set('pattern', "Correo electrónico no es valido.");
  }

  //============================================================
  // ControlValueAccessor
  //============================================================
  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.email = obj;
    this.onChange(this.email);
  }
  setDisabledState?(isDisabled: boolean): void { }


  //============================================================
  // CustomInput
  //============================================================
  showMessage(): boolean {
    const isTouchedField = this.formControl.touched ? true : false;
    const isValidField = this.formControl.valid ? true : false;
    if (isTouchedField === false) return false;
    if (isValidField === false) return true;
    return true;
  }

  getErrorMessage(): string | null {
    const objErrors = this.formControl.errors;
    if (objErrors == null || objErrors == undefined) return null;
    const typesErrors = Object.keys(objErrors); // example -> ["required","pattern"]
    const typeError = typesErrors[0];
    const messageError = this.messagesError.get(typeError);
    return messageError ?? null;
  }

}
