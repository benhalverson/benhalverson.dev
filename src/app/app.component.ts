import { Component, HostBinding, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { KonamiService } from './services/konami.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  darkModeService: DarkModeService = inject(DarkModeService);
  konamiService: KonamiService = inject(KonamiService);
}
