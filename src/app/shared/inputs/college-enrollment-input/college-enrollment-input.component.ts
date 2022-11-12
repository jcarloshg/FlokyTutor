import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-college-enrollment-input',
  templateUrl: './college-enrollment-input.component.html',
  styleUrls: ['./college-enrollment-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeEnrollmentInputComponent),
      multi: true
    }
  ]
})
export class CollegeEnrollmentInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messagesError: Map<string, string> =
      validatorService.collegeEnrollmentCustomValidator.getMessageErrors();
    super(messagesError);

    this.value = '';
  }

}
