import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';
import { ValidatorService } from '../../services/validators/validator.service';

@Component({
  selector: 'app-code-verification-input',
  templateUrl: './code-verification-input.component.html',
  styleUrls: ['./code-verification-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeVerificationInputComponent),
      multi: true
    }
  ]
})
export class CodeVerificationInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  public value: number;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> =
      validatorService.codeVerificationCustomValidator.getMessageErrors();
    super(messageError);
    this.value = 0;

  }

}
