import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCategoriesBadge]'
})
export class CategoriesBadgeDirective implements OnInit {

  public categoriesBadgeHTMLElement: ElementRef<HTMLElement>;

  @Input() set typeCategory(type: string) {
    if (type == "Leer") this.setStyleReading();
    if (type == "Oído") this.setStyleListen();
    if (type == "Hablar") this.setStyleSpeaking();
    if (type == "Escribir") this.setStyleWriting();
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
