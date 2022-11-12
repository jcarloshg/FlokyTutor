import { Injectable } from '@angular/core';
import { CustomToast } from '../inputs/custom-toast/custom-toast.inteferface';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService {

  private _customToast: CustomToast = {
    typeToast: 'error',
    message: ''
  };

  constructor() { }

  public launchToast(customToast: CustomToast) {
    this._customToast = customToast;
  }

  public get customToast(): CustomToast {
    return this._customToast;
  }

}
