import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from '../../../authenticate/services/authenticate-aws.service';
import { Account } from 'src/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-log-in',
  templateUrl: './header-log-in.component.html',
  styleUrls: ['./header-log-in.component.css']
})
export class HeaderLogInComponent implements OnInit {

  public userTutorCurrent: Account | null = null;
  public showCollapseMenu: boolean = false;

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userTutorCurrent = await this.authenticateAWSService.currentTutor();
  }

  public async signOut() {
    const signOutResponse = await this.authenticateAWSService.signOut();
    if (signOutResponse.isOk == true) this.router.navigate(['./cuenta/ingresar']);
  }

  async goToMyProfile() {
    console.log(this.userTutorCurrent);
  }

  public toogleShowMenu() {
    this.showCollapseMenu = !this.showCollapseMenu;
  }

  public getShortName() {
    if (this.userTutorCurrent == null) return;
    const shortName = this.userTutorCurrent!.fullName.split(' ').slice(0, 3).join(' ');
    const shortNameWithoutSpaces = shortName.trim();
    return shortNameWithoutSpaces;
  }

}
