import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordCustomvalidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "La contraseña es requerida.",
            validator: Validators.required,
        },
        {
            name: 'pattern',
            message: "La contraseña no es valida.",
            validator: Validators.pattern("^[a-zA-Z0-9._%+-]{6,}$"),
        },
        {
            name: 'areTheSamePass',
            message: "Las contraseñas deben coincidir.",
            validator: this.areTheSamePass
        }
    ];

    constructor() {
        super();
    }

    public areTheSamePass(formGroup: AbstractControl): ValidationErrors | null {

        const pass = formGroup.get('password')?.value;
        const confiPass = formGroup.get('confirmationPassword')?.value;

        if (pass !== confiPass) {
            formGroup.get('confirmationPassword')?.setErrors({ areTheSamePass: false });
            return { areTheSamePass: true };
        }

        return null;
    }
}