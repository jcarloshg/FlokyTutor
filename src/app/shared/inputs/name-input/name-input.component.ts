import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    }
  ]
})
export class NameInputComponent implements OnInit, ControlValueAccessor {

  @Input() messageError: string | null = null;
  @Input() showError: boolean = false;

  public name: string = '';

  constructor() { }

  ngOnInit(): void { }

  onChange = (_: any) => { };
  onTouched = (_: any) => { };

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  writeValue(obj: any): void {
    this.name = obj;
    this.onChange(this.name);
  }
  setDisabledState?(isDisabled: boolean): void { }

}
