import { Component, OnInit } from '@angular/core';
import { CustomItemForm } from '../../interfaces/custom-item-form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';

// TODO - valid collage name
// TODO - valid collage enrollment
// TODO - valid emial
// TODO - valid pass
// TODO - valid confi pass


@Component({
  selector: 'app-register-new-account',
  templateUrl: './register-new-account.component.html',
  styleUrls: ['./register-new-account.component.css']
})
export class RegisterNewAccountComponent implements OnInit {

  private customItemsForm: Map<string, CustomItemForm> = new Map<string, CustomItemForm>();
  registerAccountForm: FormGroup = this.formBuilder.group({});

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) {

    const fullNameItemForm: CustomItemForm = {
      name: 'fullName',
      customValidator: this.validatorsService.nameValidator,
      formControl: this.formBuilder.control('', this.validatorsService.nameValidator.getValidators())
    }

    this.customItemsForm.set('fullName', fullNameItemForm);
    this.registerAccountForm.addControl('fullName', fullNameItemForm.formControl);
  }

  ngOnInit(): void {
  }


  showMessageFromFormControl(nameFormControl: string): boolean {
    const validFieldTouched = this.registerAccountForm.get(nameFormControl)?.touched;
    const validFieldValid = this.registerAccountForm.get(nameFormControl)?.valid;

    const isTouchedField = validFieldTouched ? true : false;
    const isValidField = validFieldValid ? true : false;

    if (isTouchedField === false) return false;
    if (isValidField === false) return true;

    return true;
  }

  getErrorMsgFromFormControl(nameFormControl: string): string | null {

    const errors = this.registerAccountForm.get(nameFormControl)?.errors;
    if (errors == null || errors == undefined) return null;

    const customValidator = this.customItemsForm.get(nameFormControl)?.customValidator;
    const errorMessage = customValidator!.getMessageError(errors);

    return errorMessage;
  }

}
