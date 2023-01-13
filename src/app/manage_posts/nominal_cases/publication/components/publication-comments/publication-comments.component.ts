import { Component, OnInit } from '@angular/core';
import { AuthenticateAWSService } from 'src/app/authenticate/services/authenticate-aws.service';
import { PublicationAWSService } from 'src/app/manage_posts/service/publication-aws.service';
import { Account } from 'src/models';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.css']
})
export class PublicationCommentsComponent implements OnInit {

  public tutor: Account | null = null;

  constructor(
    private authenticateAWSService: AuthenticateAWSService,
  ) { }

  async ngOnInit() {
    await this.getCurrentTutor();
  }

  async getCurrentTutor() {
    const getCurrentTutorResponse = await this.authenticateAWSService.getCurrentTutor();
    this.tutor = getCurrentTutorResponse.data as Account;
  }

}

//  ng generate component manage_posts/nominal_cases/publication/components/publication-comments/components/commentInput --skip-tests