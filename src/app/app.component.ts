import { Component } from '@angular/core';
import { CustomToastService } from './shared/services/custom-toast.service';
import { ConfirmationModalService } from './shared/services/confirmation-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlokyTutor';

  constructor(
    public customToastService: CustomToastService,
    public confirmationModalService: ConfirmationModalService,
  ) { }

}
