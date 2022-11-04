import { Component, Input, OnInit } from '@angular/core';

enum typeToast {
  error,
  warning,
  success,
}

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent implements OnInit {

  @Input() type: typeToast = typeToast.success;
  @Input() message: string = '[NOT_MESSAGE]';

  constructor() { }

  ngOnInit(): void { }

}
