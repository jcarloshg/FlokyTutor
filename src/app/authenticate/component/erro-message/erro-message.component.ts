import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro-message',
  templateUrl: './erro-message.component.html',
  styleUrls: ['./erro-message.component.css']
})
export class ErroMessageComponent implements OnInit {

  @Input() showMessage: boolean = false;
  @Input() message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
