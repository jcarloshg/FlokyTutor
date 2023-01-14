import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-card-to-create-publication',
  templateUrl: './button-card-to-create-publication.component.html',
  styleUrls: ['./button-card-to-create-publication.component.css']
})
export class ButtonCardToCreatePublicationComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  public goToCreatePublication() {
    this.router.navigate(['./incio/publicaciones/crear_publicacion'])
  }

}
