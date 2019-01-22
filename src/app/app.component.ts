import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public backgroundColor: string;
  public fontColor: string;
  public linkColor: string;

  ngOnInit() {
    this.backgroundColor = '#fff';
    this.fontColor = '#222';
    this.linkColor = '#4b4fce';
  }

  /**
   * Set color from color picker
   * @param {string} type
   * @param {string} color
   */
  public setColor(type: string, color: string) {
    switch (type) {
      case 'background':
        this.backgroundColor = color;
        break;
      case 'font':
        this.fontColor = color;
        break;
      case 'link':
        this.linkColor = color;
        break;
      default:
        break;
    }
  }
}
