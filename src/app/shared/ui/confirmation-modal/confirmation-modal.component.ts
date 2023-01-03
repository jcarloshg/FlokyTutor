import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfirmationModal } from './confirmation-modal.interface';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  // styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnChanges {

  @Input() confirmationModal!: ConfirmationModal;
  public showConfirmationModal: boolean = false;

  constructor() { }

  public toggleConfirmation() { this.showConfirmationModal = !this.showConfirmationModal; }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.confirmationModal.message == '' || this.confirmationModal.title == '') return;
    this.toggleConfirmation();
  }

  public async accept() {
    try { await this.confirmationModal.functionAccept!(); }
    catch (error) { }
    this.toggleConfirmation();
  }

  public cancel() {
    try { this.confirmationModal.functionCancel!(); }
    catch (error) { }
    this.toggleConfirmation();
  }

}
