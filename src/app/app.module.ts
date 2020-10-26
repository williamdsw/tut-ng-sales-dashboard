import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GoogleChartModule } from './google-chart/google-chart.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GoogleChartModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
