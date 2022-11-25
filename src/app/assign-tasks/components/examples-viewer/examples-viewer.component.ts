import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples-viewer',
  templateUrl: './examples-viewer.component.html',
  styleUrls: ['./examples-viewer.component.css']
})
export class ExamplesViewerComponent implements OnInit {


  @Input() examples!: (string | null)[];
  public exampleIsDisplayed: boolean = false;
  public itemExample: string | null = null;

  constructor() { }

  ngOnInit(): void { }


  showAInfo() {

    if (this.exampleIsDisplayed == false) {
      this.setAnItemOfExample();
      this.exampleIsDisplayed = true;
      return;
    }

    if (this.exampleIsDisplayed == true) {
      this.exampleIsDisplayed = false;
      return;
    }
  }

  setAnItemOfExample() {
    const lengthExamples = this.examples.length;
    const indexRandom = Math.floor(Math.random() * (lengthExamples - 0) + 0);
    const itemExampleRandom = this.examples[indexRandom];
    this.itemExample = itemExampleRandom;
    // this.changeDetectorRef.detectChanges();
  }

}
