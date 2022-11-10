import { FormControl, ControlValueAccessor } from '@angular/forms';

export abstract class ClassCustomInput implements ControlValueAccessor {

    abstract formControl: FormControl;
    public data: any;

    constructor(
        private messagesError: Map<string, string>,
    ) { }

    //============================================================
    // ControlValueAccessor
    //============================================================
    onChange = (_: any) => { };
    onTouched = (_: any) => { };
    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
    writeValue(obj: any): void {
        this.data = obj;
        this.onChange(this.data);
    }
    setDisabledState?(isDisabled: boolean): void { }

    showMessage(): boolean {
        const isTouchedField = this.formControl.touched ? true : false;
        const isValidField = this.formControl.valid ? true : false;
        if (isTouchedField === false) return false;
        if (isValidField === false) return true;
        return true;
    }

    getErrorMessage(): string | null {
        const objErrors = this.formControl.errors;
        if (objErrors == null || objErrors == undefined) return null;
        const typesErrors = Object.keys(objErrors); // example -> ["required","pattern"]
        const typeError = typesErrors[0];
        const messageError = this.messagesError.get(typeError);
        return messageError ?? null;
    }

}