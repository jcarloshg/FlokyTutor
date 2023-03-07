import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ActivityType } from 'src/contexts/shared/domain/models';

@Directive({
  selector: '[appCategoriesBadge]'
})
export class CategoriesBadgeDirective implements OnInit {

  public categoriesBadgeHTMLElement: ElementRef<HTMLElement>;

  @Input() set typeCategory(type: "WRITING" | "READING" | "TALKING" | "LISTENING") {
    if (type == ActivityType.READING) this.setStyleReading();
    if (type == ActivityType.LISTENING) this.setStyleListen();
    if (type == ActivityType.TALKING) this.setStyleSpeaking();
    if (type == ActivityType.WRITING) this.setStyleWriting();
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.categoriesBadgeHTMLElement = elementRef;
  }

  ngOnInit(): void {
    this.categoriesBadgeHTMLElement.nativeElement.classList.add('border');
  }

  setStyleReading() {
    this.categoriesBadgeHTMLElement.nativeElement.classList.add('bg-read');
  }

  setStyleListen() {
    this.categoriesBadgeHTMLElement.nativeElement.classList.add('bg-listen');
  }

  setStyleSpeaking() {
    this.categoriesBadgeHTMLElement.nativeElement.classList.add('bg-speak');
  }

  setStyleWriting() {
    this.categoriesBadgeHTMLElement.nativeElement.classList.add('bg-write');
  }

}
