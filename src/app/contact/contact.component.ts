import { Component, inject } from '@angular/core';
import { CalendlyService } from '../services/calendly.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  calendlyService: CalendlyService = inject(CalendlyService);

  ngAfterViewInit() {
    this.calendlyService.initIlineWidget({
      url: 'https://calendly.com/benhalverson/15min',
      parentElement: document.getElementById('calendly-inline-widget'),
      inlineStyles: true,
      embededType: 'Inline'
    });
  }

}
