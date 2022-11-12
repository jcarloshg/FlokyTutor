import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { CustomInput } from '../CustomInput';
import { ValidatorService } from '../../services/validator.service';

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
export class PassInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  @Input() isToConfirmPass: boolean = false;
  public value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> =
      validatorService.passwordCustomvalidator.getMessageErrors();
    super(messageError);

    this.value = '';
  }

}
