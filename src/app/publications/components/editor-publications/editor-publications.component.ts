import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'


@Component({
  selector: 'app-editor-publications',
  templateUrl: './editor-publications.component.html',
  styleUrls: ['./editor-publications.component.css']
})
export class EditorPublicationsComponent implements OnInit {

  @Input() formControl: FormControl<any> = new FormControl();
  public tag = "";
  public value: any;

  constructor() { }

  ngOnInit() { }

  pirntFormVontrol() {
    console.log(this.formControl);
  }

}
