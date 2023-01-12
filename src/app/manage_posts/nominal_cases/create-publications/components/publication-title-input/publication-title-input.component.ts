import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from 'src/app/shared/inputs/CustomInput';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-publication-title-input',
  templateUrl: './publication-title-input.component.html',
  styleUrls: ['./publication-title-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PublicationTitleInputComponent),
      multi: true
    }
  ]
})
export class PublicationTitleInputComponent extends CustomInput {

  @Input() formControl!: FormControl<string>;
  public value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> = validatorService.postTitle.getMessageErrors();
    super(messageError);

    this.value = '';
  }

}
