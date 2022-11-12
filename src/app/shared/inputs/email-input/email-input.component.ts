import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { CustomInput } from '../CustomInput';
import { ValidatorService } from '../../services/validator.service';

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
export class EmailInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  public value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> =
      validatorService.emailCustomValidator.getMessageErrors();
    super(messageError);
    this.value = '';
  }

}
