import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../../../../authenticate/services/authenticate-aws.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-publication-helpers',
  templateUrl: './publication-helpers.component.html',
  styleUrls: ['./publication-helpers.component.css']
})
export class PublicationHelpersComponent implements OnInit {

  public tutor: Account | null = null;

  constructor(
    private authenticateAWSService: AuthenticateAWSService
  ) { }

  async ngOnInit() {
    await this.getCurrentTutor();
  }

  async getCurrentTutor() {
    const getCurrentTutorResponse = await this.authenticateAWSService.getCurrentTutor();
    this.tutor = getCurrentTutorResponse.data as Account;
  }

}
