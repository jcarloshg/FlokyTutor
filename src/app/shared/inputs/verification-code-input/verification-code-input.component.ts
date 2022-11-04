import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NameInputComponent } from '../name-input/name-input.component';

@Component({
  selector: 'app-verification-code-input',
  templateUrl: './verification-code-input.component.html',
  styleUrls: ['./verification-code-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    }
  ]
})
export class VerificationCodeInputComponent implements OnInit {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public verificationCode: number = 0;

  constructor() { }

  ngOnInit(): void { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.verificationCode = obj;
    this.onChange(this.verificationCode);
  }
  setDisabledState?(isDisabled: boolean): void { }

}
