import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-badge',
  templateUrl: './categories-badge.component.html',
  styleUrls: ['./categories-badge.component.css']
})
export class CategoriesBadgeComponent implements OnInit {

  @Input() typeCategory!: "Escribir" | "Leer" | "Hablar" | "Oído";

  constructor() { }

  ngOnInit(): void { }

}
