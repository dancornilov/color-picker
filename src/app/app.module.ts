import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ColorPickerComponent} from './color-picker/color-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
