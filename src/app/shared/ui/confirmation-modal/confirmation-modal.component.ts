import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfirmationModal } from './confirmation-modal.interface';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnChanges {

  @Input() confirmationModal!: ConfirmationModal;
  public showConfirmationModal: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.toggleConfirmation();
    console.log(this.confirmationModal.title);
    console.log(this.confirmationModal.message);
  }

  public toggleConfirmation() {
    this.showConfirmationModal = !this.showConfirmationModal;
  }

  public accept() {
    console.log('accept');
  }

  public cancel() {
    console.log('cancel');
  }

}
