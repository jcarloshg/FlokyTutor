import { Validators } from "@angular/forms";
import { CustomValidator, ValidatorItem } from "./custom-validator";

export class PostTitle extends CustomValidator {
    public override validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "El 'titulo' es requerido",
            validator: Validators.required
        },
        {
            name: "pattern",
            message: "El 'titulo' es invalido.",
            validator: Validators.pattern(/^[a-zA-ZÀ-ÿ(\W)+ ]{4,}$/),
        }
    ];

    constructor() {
        super();
    }
}