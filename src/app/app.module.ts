import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { GoogleChartModule } from './google-chart/google-chart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GoogleChartModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
