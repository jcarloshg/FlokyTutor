import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { Account } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public currentTutor!: Account;

  constructor(public authenticateAWSService: AuthenticateAWSService) { }

  async ngOnInit(): Promise<void> {
    const getCurrentTutorResponse = await this.authenticateAWSService.getCurrentTutor();
    this.currentTutor = getCurrentTutorResponse.data as Account;
  }

  public getShortName() {
    if (this.currentTutor == null) return;
    const shortName = this.currentTutor!.fullName.split(' ').slice(0, 3).join(' ');
    const shortNameWithoutSpaces = shortName.trim();
    return shortNameWithoutSpaces;
  }

}
