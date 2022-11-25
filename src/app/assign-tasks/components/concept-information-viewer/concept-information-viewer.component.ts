import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-concept-information-viewer',
  templateUrl: './concept-information-viewer.component.html',
  styleUrls: ['./concept-information-viewer.component.css']
})
export class ConceptInformationViewerComponent implements OnInit {

  @Input() conceptInformation!: (string | null)[];
  public informationIsDisplayed: boolean = false;
  public itemConcepInfomation: string | null = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  showAInfo() {

    if (this.informationIsDisplayed == false) {
      this.setAnItemOfInformation();
      this.informationIsDisplayed = true;
      return;
    }

    if (this.informationIsDisplayed == true) {
      this.informationIsDisplayed = false;
      return;
    }

  }

  setAnItemOfInformation() {
    const lengthConceptInformation = this.conceptInformation.length;
    const indexRandom = Math.floor(Math.random() * (lengthConceptInformation - 0) + 0);
    const itemConceptInformationRandom = this.conceptInformation[indexRandom];
    this.itemConcepInfomation = itemConceptInformationRandom;
    this.changeDetectorRef.detectChanges();
  }

}
