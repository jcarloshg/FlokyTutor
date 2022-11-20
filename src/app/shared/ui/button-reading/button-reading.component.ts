import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-reading',
  templateUrl: './button-reading.component.html',
  styleUrls: ['./button-reading.component.css']
})
export class ButtonReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  executeFunction() {
    console.log(`[ButtonReadingComponent] -> executeFunction`);
  }

}
