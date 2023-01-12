import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from 'src/app/shared/inputs/CustomInput';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { ActivityType } from 'src/models';

@Component({
  selector: 'app-publication-category-input',
  templateUrl: './publication-category-input.component.html',
  styleUrls: ['./publication-category-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PublicationCategoryInputComponent),
      multi: true
    }
  ]
})
export class PublicationCategoryInputComponent extends CustomInput {

  @Input() formControl!: FormControl<"WRITING" | "READING" | "TALKING" | "LISTENING">;
  public value: "WRITING" | "READING" | "TALKING" | "LISTENING" = "LISTENING";

  constructor(
    private validatorService: ValidatorService,
  ) {
    const messageError: Map<string, string> = validatorService.postTitle.getMessageErrors();
    super(messageError);
  }

}
