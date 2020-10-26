import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModule } from './service/service.module';

import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TableChartComponent } from './table-chart/table-chart.component';

const COMPONENTS = [LineChartComponent, PieChartComponent, TableChartComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    ServiceModule
  ],
  exports: [COMPONENTS]
})
export class GoogleChartModule { }
