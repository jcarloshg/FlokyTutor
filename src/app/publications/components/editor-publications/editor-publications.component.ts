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
  public tag = "<iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/H91aqUHn8sE?showinfo=0\"></iframe><p><br></p>";
  public value: any;

  constructor() { }

  ngOnInit() { }

  pirntFormVontrol() {
    console.log(this.formControl);
  }

}
