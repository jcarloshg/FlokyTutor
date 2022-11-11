
import { ValidatorFn } from '@angular/forms';

export interface ValidatorItem {
    name: string,
    message: string,
    valiadator: ValidatorFn;
}

export abstract class CustomValidator {

    abstract validatorsItems: ValidatorItem[];

    public getValidators(): ValidatorFn[] {
        const validators = this.validatorsItems.map(
            (validatorItem) => {
                return validatorItem.valiadator;
            }
        );
        return validators;
    };

    public getMessageErrors(): Map<string, string> {
        const messageErr: Map<string, string> = new Map();
        this.validatorsItems.forEach((validatorItem) => {
            messageErr.set(validatorItem.name, validatorItem.message)
        });
        return messageErr;
    }
}