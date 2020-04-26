import { Injectable } from '@angular/core';

import { ServiceModule } from './service.module';

declare var google: any;

@Injectable({
  providedIn: ServiceModule
})
export class GoogleChartService {

  private localGoogle: any;

  constructor() {
    this.localGoogle = google;
  }

  public getGoogle() {
    return this.localGoogle;
  }
}
