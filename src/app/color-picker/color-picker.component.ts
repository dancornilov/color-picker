import { Component, EventEmitter, Input, Output, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ColorPickerComponent),
  multi: true,
};

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [CUSTOM_VALUE_ACCESSOR],
  encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent implements ControlValueAccessor {
  @Input() heading: string;
  _color: string;
  @Input() colorList: string[];
  public show = false;

  disabled = false;

  onChange = (_: any) => { };
  onTouched = () => { };
  constructor() {
  }

  writeValue(obj: string): void {
    this._color = obj;
    // this.onChange(obj);
  }


  registerOnChange(fn: (_: string) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  /**
   * Change color from default colors
   */
  public changeColor(color: string): void {
    this._color = color;
    this.onChange(this._color);
    this.show = false;
  }


  /**
   * Change color from input
   */
  public changeColorManual(color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)/i.test(color);

    if (isValid) {
      this._color = color;
    }
    this.onChange(this._color);
  }

  /**
   * Change status of visibility to color picker
   */
  public toggleColors(): void {
    if (!this.disabled) {
      this.show = !this.show;
    }
  }
}
