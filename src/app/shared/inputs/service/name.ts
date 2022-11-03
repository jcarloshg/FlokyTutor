import { Validators, FormControl, ValidationErrors, ValidatorFn, FormBuilder } from '@angular/forms';
import { CustomValidator } from './customValidator.interface';


export class Name implements CustomValidator {

    name: string;
    formControl: FormControl<any>;
    messagesError: Map<string, string>;

    constructor(
        _name: string,
        private formBuilder: FormBuilder,
    ) {
        this.name = _name;
        this.formControl = this.formBuilder.control(
            '',
            [
                Validators.required,
                Validators.pattern("^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){2,}$"),
                this.validShortName
            ]
        );
        this.messagesError = new Map()
            .set('required', "Nombre es requerido.")
            .set('pattern', "Debe ser el nombre con apellidos.")
            .set('short_name', "Nombre no es valido.")
    }

    showMessage(): boolean {
        const isTouchedField = this.formControl.touched ? true : false;
        const isValidField = this.formControl.valid ? true : false;
        if (isTouchedField === false) return false;
        if (isValidField === false) return true;
        return true;
    }
    getErrorMessage(): string | null {
        const objErrors = this.formControl.errors;
        if (objErrors == null || objErrors == undefined) return null;
        const typesErrors = Object.keys(objErrors); // example -> ["required","pattern"]
        const typeError = typesErrors[0];
        const messageError = this.messagesError.get(typeError);
        return messageError ?? null;
    }


    private validShortName(shortNameFormControl: FormControl): ValidationErrors | null {
        const shortNameValue: string = shortNameFormControl.value?.trim();
        const regExp = new RegExp('^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){1,}$')
        const isValid = regExp.test(shortNameValue);

        if (isValid == true) return null;

        return {
            short_name: 'is not valid',
        }
    }

}
