import { Component, OnInit } from '@angular/core';
import { CustomToastService } from '../../../shared/services/custom-toast.service';

@Component({
  selector: 'app-home-authenticate',
  templateUrl: './home-authenticate.component.html',
  styleUrls: ['./home-authenticate.component.css']
})
export class HomeAuthenticateComponent implements OnInit {

  constructor(
    public customToastService: CustomToastService,
  ) { }

  ngOnInit(): void {
  }

}
