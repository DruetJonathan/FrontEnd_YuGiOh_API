import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NgChartsModule} from "ng2-charts";
import {NgApexchartsModule} from "ng-apexcharts";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule,
    NgApexchartsModule
  ],
  exports:[

  ]
})
export class SharedModule { }
