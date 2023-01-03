import { Injectable } from '@angular/core';
import { ConfirmationModal } from '../ui/confirmation-modal/confirmation-modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  private _confirmationModal: ConfirmationModal;

  constructor() {
    this._confirmationModal = { title: 'PROOF', message: 'BODY' };
  }

  public launch(confirmationModal: ConfirmationModal) {
    this._confirmationModal = confirmationModal;
  }

  public get confirmationModal(): ConfirmationModal {
    return this._confirmationModal;
  }

}
