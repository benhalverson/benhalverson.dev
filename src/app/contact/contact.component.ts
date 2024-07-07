import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CalendlyService } from '../services/calendly.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private readonly calendlyService: CalendlyService, @Inject(PLATFORM_ID) private readonly platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.calendlyService.initIlineWidget({
        url: 'https://calendly.com/benhalverson/15min',
        parentElement: document.getElementById('calendly-inline-widget'),
        inlineStyles: true,
        embededType: 'Inline'
      });
    }
  }

}
