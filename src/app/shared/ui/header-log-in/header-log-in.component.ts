import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../../authenticate/services/authenticate-aws.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-header-log-in',
  templateUrl: './header-log-in.component.html',
  styleUrls: ['./header-log-in.component.css']
})
export class HeaderLogInComponent implements OnInit {

  constructor(
    public authenticateAWSService: AuthenticateAWSService
  ) { }

  async ngOnInit(): Promise<void> {
    const tutor = await this.authenticateAWSService.currentTutor();
    console.log(tutor);
  }

  async goToMyProfile() {
    const tutor = await this.authenticateAWSService.currentTutor();
    console.log(tutor);
  }

}
