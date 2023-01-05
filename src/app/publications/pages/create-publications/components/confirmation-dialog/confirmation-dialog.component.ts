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
  @Output() launchResponseEvent = new EventEmitter<boolean>();

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
    this.launchResponseEvent.emit(true);
    this.toggleConfirmation();
  }

  public cancel() {
    this.launchResponseEvent.emit(false);
    this.toggleConfirmation();
  }

}
