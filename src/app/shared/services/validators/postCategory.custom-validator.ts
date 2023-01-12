import { Validators } from "@angular/forms";
import { CustomValidator, ValidatorItem } from "./custom-validator";

export class PostCategory extends CustomValidator {

    public validatorsItems: ValidatorItem[] = [
        {
            name: "required",
            message: "La 'categoría de la publicación' es requerido",
            validator: Validators.required
        },
    ];

    constructor() {
        super();
    }

}