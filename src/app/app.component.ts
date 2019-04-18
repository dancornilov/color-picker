import { Component, OnInit } from '@angular/core';
import { FormControl, AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public backgroundColor: FormControl;
  public fontColor: FormControl;
  public linkColor: FormControl;

  colorsList = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#c6a670',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];

  private colorValidator: ValidatorFn = (control: AbstractControl) => {
    console.log(control.value + ' INVALID');
        console.log('ColorsList : ' + this.colorsList);
        console.log('Index : ' + this.colorsList.indexOf(control.value));
    if (control.value !== undefined
      && (!control.value.startsWith('#') || (this.colorsList && this.colorsList.indexOf(control.value.toLowerCase()) === -1))) {
      return { 'colorValue': control.value};
    }
    return null;
  }
  ngOnInit() {
    this.backgroundColor = new FormControl('#ffffff', [this.colorValidator, Validators.minLength(7)]);
    this.fontColor = new FormControl('#222222', this.colorValidator);
    this.linkColor = new FormControl('#4b4fce', this.colorValidator);
  }

}
