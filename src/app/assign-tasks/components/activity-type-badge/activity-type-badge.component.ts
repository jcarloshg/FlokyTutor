import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ActivityType } from 'src/models';


@Component({
  selector: 'app-activity-type-badge',
  templateUrl: './activity-type-badge.component.html',
  styleUrls: ['./activity-type-badge.component.css']
})
export class ActivityTypeBadgeComponent implements OnInit {

  public tagEspaniol = '';
  public activityTypeBadgeHTMLElement: ElementRef<HTMLElement>;
  public dataToBadge: Map<string, any> = new Map<string, any>()
    .set(ActivityType.LISTENING, { tagEspaniol: 'Escuchar', backgroundCSS: 'bg-listen' })
    .set(ActivityType.READING, { tagEspaniol: 'Leer', backgroundCSS: 'bg-read' })
    .set(ActivityType.TALKING, { tagEspaniol: 'Hablar', backgroundCSS: 'bg-speak' })
    .set(ActivityType.WRITING, { tagEspaniol: 'Escribir', backgroundCSS: 'border-write' });

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
    this.activityTypeBadgeHTMLElement = elementRef;
  }

  ngOnInit(): void { }

  @Input() set activityType(type: string | null | undefined) {

    const itemDataToBadge = this.dataToBadge.get(type!);
    console.log({ itemDataToBadge });

    this.tagEspaniol = itemDataToBadge!.tagEspaniol;
    this.activityTypeBadgeHTMLElement.nativeElement.classList.add(itemDataToBadge!.backgroundCSS);

  }

}
