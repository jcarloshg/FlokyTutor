import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  public userTutorCurrent!: Account;

  constructor(
    private router: Router,
    public authenticateAWSService: AuthenticateAWSService,
  ) { }

  async ngOnInit(): Promise<void> {
    this.userTutorCurrent = await this.authenticateAWSService.currentTutor() as Account;
  }

  public getCreatedAt(): string {
    const date: string = this.userTutorCurrent.createdAt!;
    return date;
  }

  public async logOut() {
    const signOutResponse = await this.authenticateAWSService.signOut();
    if (signOutResponse.isOk == true) this.router.navigate(['./cuenta/ingresar']);
  }

}
