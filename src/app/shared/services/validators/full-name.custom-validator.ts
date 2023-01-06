import { Validators } from '@angular/forms';
import { CustomValidator, ValidatorItem } from "./custom-validator";

export class FullNameCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "El nombre es requerido.",
            validator: Validators.required
        },
        {
            name: "pattern",
            message: "Debe ser el nombre con apellidos.",
            validator: Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}( {1,2}[a-zA-ZÀ-ÿ]{2,}){2,}$'),
        }
    ];

    constructor() {
        super();
    }
}