import { CustomValidator, ValidatorItem } from "./custom-validator";
import { Validators } from '@angular/forms';

export class CollegeNameCustomValidator extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "El nombre del colegio es requerido.",
            validator: Validators.required
        },
        {
            name: "pattern",
            message: "El nombre del colegio no es valido.",
            validator: Validators.pattern('^[a-zA-ZÀ-ÿ]{2,}( {1,2}[a-zA-ZÀ-ÿ]{2,}){2,}$'),
        }
    ];

    constructor() {
        super();
    }
}