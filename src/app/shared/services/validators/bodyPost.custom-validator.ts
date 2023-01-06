import { Validators } from "@angular/forms";
import { CustomValidator, ValidatorItem } from "./custom-validator";

export class PostBody extends CustomValidator {

    public override validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "El 'cuerpo de la publicación' es requerido",
            validator: Validators.required
        },
    ];

    constructor() {
        super();
    }
}