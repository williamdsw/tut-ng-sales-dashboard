import { Component, OnInit } from '@angular/core';

import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  private chartLibrary: any;

  constructor(private googleChartService: GoogleChartService) {
    this.chartLibrary = this.googleChartService.getGoogle ();
    this.chartLibrary.charts.load ('current', { packages: ['corechart', 'table']});
    this.chartLibrary.charts.setOnLoadCallback (this.drawChart.bind (this));
   }

  ngOnInit(): void {
  }

  private drawChart() {
    const divPieChart = document.getElementById ('divPieChart');
    const chart = new this.chartLibrary.visualization.PieChart (divPieChart);
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
