import { Injectable } from '@angular/core';

declare const Calendly: any;
@Injectable({
  providedIn: 'root'
})
export class CalendlyService {

  constructor() { }

  initIlineWidget(options: any) {
    Calendly.initInlineWidget(options);
  }


}
