import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  @ViewChild ('pieChartContainer', { static: true })
  private pieChartContainer: ElementRef;

  private chartLibrary: any;

  constructor(private googleChartService: GoogleChartService) {
    this.chartLibrary = this.googleChartService.getGoogle ();
    this.chartLibrary.charts.load ('current', { packages: ['corechart', 'table']});
    this.chartLibrary.charts.setOnLoadCallback (this.drawChart.bind (this));
   }

  ngOnInit(): void {}

  private drawChart() {
    const chart = new this.chartLibrary.visualization.PieChart (this.pieChartContainer.nativeElement);
    const data = new this.chartLibrary.visualization.DataTable();
    data.addColumn ('string', 'Accessories');
    data.addColumn ('number', 'Quantity');
    data.addRows ([
      ['Computers', 3],
      ['Hard Drives', 6],
      ['Printers', 4],
      ['Monitors', 5],
      ['RAM', 2],
    ]);

    const options = { title: 'Sales Info' };
    chart.draw (data, options);
  }
}
