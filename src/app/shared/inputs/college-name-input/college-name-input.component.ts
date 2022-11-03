import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-college-name-input',
  templateUrl: './college-name-input.component.html',
  styleUrls: ['./college-name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeNameInputComponent),
      multi: true
    }
  ]
})
export class CollegeNameInputComponent implements OnInit, ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public collegeName: string = '';

  constructor() { }

  ngOnInit(): void { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };
  writeValue(obj: any): void {
    if (obj !== undefined) return;
    this.collegeName = obj;
    this.onChange(this.collegeName);
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void { }

}
