import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { AppComponent } from './app.component';
import { NguiMapModule} from '@ngui/map';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule,
    NguiMapModule.forRoot()
  ],
  exports: [
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButtonModule,
            MatSliderModule],
  declarations: [ AppComponent ],
  providers: [
              NguiMapModule
            ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
