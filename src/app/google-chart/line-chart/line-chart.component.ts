import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { log } from 'util';

import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html'
})
export class LineChartComponent implements OnInit {

  @ViewChild ('lineChartContainer', { static: true })
  private lineChartContainer: ElementRef;

  private chartLibrary: any;

  constructor(private googleChartService: GoogleChartService) {
    this.chartLibrary = this.googleChartService.getGoogle ();
    this.chartLibrary.charts.load ('current', { packages: ['corechart', 'table']});
    this.chartLibrary.charts.setOnLoadCallback (this.drawChart.bind (this));
   }

  ngOnInit(): void {}

  private drawChart() {
    const data = this.chartLibrary.visualization.arrayToDataTable ([
      ['Year', 'Sales', 'Expenses'],
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
      ['2008', 2000, 1600],
      ['2009', 1845, 3000],
      ['2010', 452.56, 100.12],
      ['2011', 3123.23, 2000.41]
    ]);

    const chart = new this.chartLibrary.visualization.LineChart (this.lineChartContainer.nativeElement);
    chart.draw (data);
  }

}
