import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationDialog } from './ConfirmationDialog.interface';
import { ActionsDialogs } from './ActionsDialogs.interface';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements ActionsDialogs<ConfirmationDialog> {

  public confirmationDialog: ConfirmationDialog = { title: '', message: '' };
  public showConfirmationDialog: boolean = false;
  @Output() responseAcceptEvent = new EventEmitter();
  @Output() responseCancelEvent = new EventEmitter();

  constructor() { }

  public launch(params?: ConfirmationDialog | undefined): void {
    if (params == undefined) return;
    this.confirmationDialog = params!;
    this.toggleConfirmation();
  }

  close(): void {
    this.toggleConfirmation();
  }

  public toggleConfirmation() {
    this.showConfirmationDialog = !this.showConfirmationDialog;
  }

  public accept() {
    this.responseAcceptEvent.emit();
    this.toggleConfirmation();
  }

  public cancel() {
    this.responseCancelEvent.emit();
    this.toggleConfirmation();
  }

}
