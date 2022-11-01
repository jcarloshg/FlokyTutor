import { CustomValidator } from '../../shared/inputs/service/interfcaes';
import { FormControl } from '@angular/forms';

export interface CustomItemForm {
    name: string,
    customValidator: CustomValidator,
    formControl: FormControl,
}