import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { CustomInput } from '../custom-input.interface';

@Component({
  selector: 'app-pass-input',
  templateUrl: './pass-input.component.html',
  styleUrls: ['./pass-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassInputComponent),
      multi: true
    }
  ]
})
export class PassInputComponent implements ControlValueAccessor, CustomInput {

  @Input() formControl!: FormControl;
  public messagesError: Map<string, string>;
  public pass: string = '';

  constructor() {
    this.messagesError = new Map()
      .set('required', "Contraseña es requerida.")
      .set('pattern', "Contraseña no es valida.");
  }

  //============================================================
  // ControlValueAccessor
  //============================================================
  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.pass = obj;
    this.onChange(this.pass);
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
