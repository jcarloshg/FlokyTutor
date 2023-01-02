import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-publication-body-input',
  templateUrl: './publication-body-input.component.html',
  styleUrls: ['./publication-body-input.component.css']
})
export class PublicationBodyInputComponent implements OnInit {

  @Input() formControl: FormControl<any> = new FormControl();

  constructor() { }

  ngOnInit(): void { }

}
