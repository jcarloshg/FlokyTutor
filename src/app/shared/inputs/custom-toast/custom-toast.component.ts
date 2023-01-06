import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { CustomToast } from './custom-toast.inteferface';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent implements OnChanges {

  private readonly SECONDS_DEFAULT: number = 3;
  private readonly TYPE_TOAST_STYLE: Map<string, string>;
  public showToast: boolean = false;
  @Input() customToast!: CustomToast;

  constructor() {
    this.TYPE_TOAST_STYLE = new Map<string, string>()
      .set('error', "toast show bg-danger bg-gradient text-white")
      .set('warning', "toast show bg-warning bg-gradient text-white")
      .set('success', "toast show bg-success bg-gradient text-white")
  }

  ngOnChanges(changes: SimpleChanges): void {

    const isValidNewToast = this.customToast.message.length != 0 && this.customToast.typeToast.length != 0
    if (isValidNewToast == false) return;

    this.showToast = true;

    const seconds = changes['customToast'].currentValue.seconds ?? this.SECONDS_DEFAULT;
    const waitSeconds = 1000 * seconds;
    setTimeout(
      () => { this.showToast = false; },
      waitSeconds
    );
  }

  getStyle(typeToast: string): string {
    return this.TYPE_TOAST_STYLE.get(typeToast)!;
  }

  closeToast() {
    this.showToast = false;
  }

}
