import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ActivityType } from 'src/models';

@Directive({
  selector: '[appCardActivity]'
})
export class CardActivityDirective implements OnInit {

  public cardActivityHTMLElement: ElementRef<HTMLElement>;

  @Input() set activityType(type: string) {
    if (type == ActivityType.READING) this.setStyleReading();
    if (type == ActivityType.LISTENING) this.setStyleListen();
    if (type == ActivityType.TALKING) this.setStyleSpeaking();
    if (type == ActivityType.WRITING) this.setStyleWriting();
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.cardActivityHTMLElement = elementRef;
  }

  ngOnInit(): void {
    this.cardActivityHTMLElement.nativeElement.classList.add('bg-opacity-10');
    this.cardActivityHTMLElement.nativeElement.classList.add('border');
  }

  setStyleReading() {
    this.cardActivityHTMLElement.nativeElement.classList.add('bg-read');
    this.cardActivityHTMLElement.nativeElement.classList.add('border-read');
  }

  setStyleListen() {
    this.cardActivityHTMLElement.nativeElement.classList.add('bg-listen');
    this.cardActivityHTMLElement.nativeElement.classList.add('border-listen');
  }

  setStyleSpeaking() {
    this.cardActivityHTMLElement.nativeElement.classList.add('bg-speak');
    this.cardActivityHTMLElement.nativeElement.classList.add('border-speak');
  }

  setStyleWriting() {
    this.cardActivityHTMLElement.nativeElement.classList.add('bg-write');
    this.cardActivityHTMLElement.nativeElement.classList.add('border-write');
  }

}
