import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-publication-title-input',
  templateUrl: './publication-title-input.component.html',
  styleUrls: ['./publication-title-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PublicationTitleInputComponent),
      multi: true
    }
  ]
})
export class PublicationTitleInputComponent implements OnInit {


  @Input() plok: string;

  constructor() {
    this.plok = 'aslkdjf';
  }

  ngOnInit(): void { }

}
