import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CustomToast } from './custom-toast.inteferface';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent implements OnChanges {

  @Input() seconds: number = 5;
  @Input() customToast!: CustomToast;
  private typeToastStyle: Map<string, string>;
  public showToast: boolean = false;

  constructor() {
    this.typeToastStyle = new Map<string, string>()
      .set('error', "toast show bg-danger bg-gradient text-white")
      .set('warning', "toast show bg-warning bg-gradient text-white")
      .set('success', "toast show bg-success bg-gradient text-white")
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.customToast.message == '') return;

    this.showToast = true;
    const waitSeconds = 1000 * this.seconds;
    setTimeout(
      () => { this.showToast = false; },
      waitSeconds
    );
  }

  getStyle(typeToast: string): string {
    return this.typeToastStyle.get(typeToast)!;
  }

  closeToast() {
    this.showToast = false;
  }

}
