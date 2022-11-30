import { Component, OnInit } from '@angular/core';
import { QuillConfiguration } from './quill-configuration';

@Component({
  selector: 'app-editor-publications',
  templateUrl: './editor-publications.component.html',
  styleUrls: ['./editor-publications.component.css']
})
export class EditorPublicationsComponent implements OnInit {

  public quillConfiguration = QuillConfiguration;
  constructor() { }

  ngOnInit(): void { }

}
