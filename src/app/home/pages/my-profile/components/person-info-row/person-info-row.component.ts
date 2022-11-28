import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-info-row',
  templateUrl: './person-info-row.component.html',
  styleUrls: ['./person-info-row.component.css']
})
export class PersonInfoRowComponent implements OnInit {

  @Input() tag!: string;
  @Input() valueInfo!: string;

  constructor() { }

  ngOnInit(): void { }

}
