import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidator } from './customValidator.interface';

export class CollageEnrollment implements CustomValidator {

    public name: string;
    public formControl: FormControl<any>;
    public messagesError: Map<string, string>;

    constructor(
        _name: string,
        private formBuilder: FormBuilder,
    ) {
        this.name = _name;
        this.formControl = this.formBuilder.control(
            '',
            [
                Validators.required,
                Validators.pattern('[a-zA-Z]{3,}'),
            ]
        );
        this.messagesError = new Map<string, string>()
            .set('required', 'El registro escolar es obligatorio.')
            .set('pattern', 'El registro no es valido.');
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
}