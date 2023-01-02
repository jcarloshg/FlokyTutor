import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from 'src/app/shared/inputs/CustomInput';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-publication-body-input',
  templateUrl: './publication-body-input.component.html',
  styleUrls: ['./publication-body-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PublicationBodyInputComponent),
      multi: true
    }
  ]
})
export class PublicationBodyInputComponent extends CustomInput {

  @Input() formControl!: FormControl<string>;
  override value: any;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> = validatorService.fullNameCustomValidator.getMessageErrors();
    super(messageError);
    this.value = '';
  }

}
