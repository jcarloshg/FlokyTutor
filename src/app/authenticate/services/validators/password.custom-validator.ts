import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordCustomvalidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: 'required',
            message: "La contraseña es requerida.",
            valiadator: Validators.required,
        },
        {
            name: 'pattern',
            message: "La contraseña no es valida.",
            valiadator: Validators.pattern("^[a-zA-Z0-9._%+-]{6,}$"),
        },
        {
            name: 'areTheSamePass',
            message: "Las contraseñas deben coincidir.",
            valiadator: this.areTheSamePass
        }
    ];

    constructor() {
        super();
    }

    private areTheSamePass(formGroup: AbstractControl): ValidationErrors | null {

        const pass = formGroup.get('password')?.value;
        const confiPass = formGroup.get('confiPassword')?.value;

        if (pass !== confiPass) {
            formGroup.get('confiPass')?.setErrors({ areTheSamePass: false });
            return { areTheSamePass: true };
        }

        return null;
    }
}