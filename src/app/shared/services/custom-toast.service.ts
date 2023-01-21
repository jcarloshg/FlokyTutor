import { Injectable } from '@angular/core';
import { CustomToast } from '../inputs/custom-toast/custom-toast.inteferface';
import { LaunchToastParams, LaunchToastUserInterface } from 'src/contexts/shared/domain/user-interface.launch-toast';

@Injectable({
  providedIn: 'root'
})
export class CustomToastService implements LaunchToastUserInterface {

  private _customToast: CustomToast = {
    typeToast: 'error',
    message: ''
  };

  constructor() { }

  async run(launchToastParams: LaunchToastParams): Promise<void> {
    this._customToast = {
      message: launchToastParams.message,
      typeToast: launchToastParams.typeToast,
    }
  }

  public launchToast(customToast: CustomToast) {
    this._customToast = customToast;
  }

  public get customToast(): CustomToast {
    return this._customToast;
  }

}
