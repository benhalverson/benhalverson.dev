import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { KonamiService } from './services/konami.service';
import { HealthService } from './health.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  darkModeService: DarkModeService = inject(DarkModeService);
  konamiService: KonamiService = inject(KonamiService);
  healthService: HealthService = inject(HealthService);

  ngOnInit() {
    this.healthService.getHealth().subscribe();
  }
}
