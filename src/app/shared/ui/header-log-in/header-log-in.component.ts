import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../../authenticate/services/authenticate-aws.service';

@Component({
  selector: 'app-header-log-in',
  templateUrl: './header-log-in.component.html',
  styleUrls: ['./header-log-in.component.css']
})
export class HeaderLogInComponent implements OnInit {

  constructor(
    public authenticateAWSService: AuthenticateAWSService
  ) { }

  ngOnInit(): void { }

  async goToMyProfile() {
    // console.log(this.authenticateAWSService.IDTUTOR);
    await this.authenticateAWSService.getCurrent();
  }

}
