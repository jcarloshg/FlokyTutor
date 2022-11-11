import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators, ValidationErrors, FormControl, ValidatorFn } from '@angular/forms';

export class NameCustomValidator extends CustomValidator {

    public required: ValidatorItem = {
        name: "required",
        message: "El nombre es requerido.",
        valiadator: Validators.required
    }

    public fullName: ValidatorItem = {
        name: "fullName",
        message: "Debe ser el nombre con apellidos.",
        valiadator: this.fullNameValidatorFunc as ValidatorFn
    }

    public names: ValidatorItem = {
        name: "names",
        message: "Unicamente nombre(s)",
        valiadator: this.namesValidatorFunc as ValidatorFn
    }

    public validatorsItems: ValidatorItem[] = [
        this.fullName,
        this.names,
        this.required,
    ];

    constructor() {
        super();
    }

    public fullNameValidatorFunc(nameControl: FormControl<string>): ValidationErrors | null {
        const fullName: string = nameControl.value.trim();
        const regExp = new RegExp('^[a-zA-ZÀ-ÿ]{2,}( {1,2}[a-zA-ZÀ-ÿ]{2,}){2,}$');
        if (regExp.test(fullName) == false) return { fullName: 'NOT_FULL_NAME' };
        return null;
    }

    public namesValidatorFunc(nameControl: FormControl<string>): ValidationErrors | null {
        const name: string = nameControl.value.trim();
        const regExp = new RegExp('^([a-zA-ZÀ-ÿ _]){3,}$');
        if (regExp.test(name) == false) return { names: 'NOT_NAMES' };
        return null;
    }
}