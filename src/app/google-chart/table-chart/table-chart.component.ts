import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html'
})
export class TableChartComponent implements OnInit {

  @ViewChild('tableChartContainer', { static: true })
  private tableChartContainer: ElementRef;

  private chartLibrary: any;

  constructor(private googleChartService: GoogleChartService) {
    this.chartLibrary = this.googleChartService.getGoogle ();
    this.chartLibrary.charts.load ('current', { packages: ['corechart', 'table']});
    this.chartLibrary.charts.setOnLoadCallback (this.drawChart.bind (this));
   }

  ngOnInit(): void {}

  private drawChart() {
    const chart = new this.chartLibrary.visualization.Table (this.tableChartContainer.nativeElement);
    const data = new this.chartLibrary.visualization.DataTable();
    data.addColumn ('string', 'Year');
    data.addColumn ('number', 'Sales');
    data.addColumn ('number', 'Expenses');
    data.addRows ([
      ['2004', 1000, 400],
      ['2005', 1170, 460],
      ['2006', 660, 1120],
      ['2007', 1030, 540],
      ['2008', 2000, 1600],
      ['2009', 1845, 3000],
      ['2010', 452.56, 100.12],
      ['2011', 3123.23, 2000.41]
    ]);

    const options = { title: 'Sales Tubular Data', width: '100%', height: '100%' };
    chart.draw (data, options);
  }
}
