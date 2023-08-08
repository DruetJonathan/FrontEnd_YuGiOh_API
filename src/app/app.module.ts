import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "../shared/shared.module";
import {NgChartsModule} from "ng2-charts";
import { CardComponent } from './components/card/card.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    NgChartsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
