import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {

  public userTutorCurrent!: Account;

  constructor(
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userTutorCurrent = await this.authenticateAWSService.currentTutor() as Account;
  }

  public getShortName() {
    // if (this.userTutorCurrent == null) return;
    const shortName = this.userTutorCurrent!.fullName.split(' ').slice(0, 3).join(' ');
    const shortNameWithoutSpaces = shortName.trim();
    return shortNameWithoutSpaces;
  }

}
