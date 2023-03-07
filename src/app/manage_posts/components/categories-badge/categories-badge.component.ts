import { Component, Input, OnInit } from '@angular/core';
import { ActivityType } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-categories-badge',
  templateUrl: './categories-badge.component.html',
  styleUrls: ['./categories-badge.component.css']
})
export class CategoriesBadgeComponent implements OnInit {

  @Input() category!: "WRITING" | "READING" | "TALKING" | "LISTENING";

  constructor() { }

  ngOnInit(): void { }

  public categoryTraduced(): string {
    if (this.category == "WRITING") return "Escribir";
    if (this.category == "READING") return "Leer";
    if (this.category == "LISTENING") return "Escuchar";
    if (this.category == "TALKING") return "Hablar";
    return '[NOT_CATEGORY]';

  }

}
