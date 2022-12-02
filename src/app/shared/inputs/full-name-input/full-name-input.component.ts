import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { CustomInput } from '../CustomInput';

@Component({
  selector: 'app-full-name-input',
  templateUrl: './full-name-input.component.html',
  styleUrls: ['./full-name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FullNameInputComponent),
      multi: true
    }
  ]
})
export class FullNameInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  public value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messagesError: Map<string, string> = validatorService.fullNameCustomValidator.getMessageErrors();
    super(messagesError);

    this.value = '';
  }

}
