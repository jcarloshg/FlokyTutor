import { Validators } from "@angular/forms";
import { CustomValidator, ValidatorItem } from "./custom-validator";

export class PostTitle extends CustomValidator {
    public override validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "El 'titulo' es requerido",
            valiadator: Validators.required
        },
        {
            name: "pattern",
            message: "El 'titulo' es invalido.",
            valiadator: Validators.pattern('^[a-zA-ZÀ-ÿ ]{3,}$'),
        }
    ];

    constructor() {
        super();
    }
}