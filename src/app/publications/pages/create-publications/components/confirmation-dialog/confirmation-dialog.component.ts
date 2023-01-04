import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationDialog } from './ConfirmationDialog.interface';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {

  public confirmationDialog: ConfirmationDialog = { title: '', message: '' };
  public showConfirmationDialog: boolean = false;

  constructor() { }

  public toggleConfirmation() {
    this.showConfirmationDialog = !this.showConfirmationDialog;
  }

  public launch(confirmationDialog: ConfirmationDialog) {
    this.confirmationDialog = confirmationDialog;
    this.toggleConfirmation();
  }

  public accept() {
    console.log('accept');
    this.toggleConfirmation();
  }

  public cancel() {
    console.log('cancel');
    this.toggleConfirmation();
  }

}
