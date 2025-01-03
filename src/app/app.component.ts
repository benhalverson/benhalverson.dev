import { Component, inject, OnInit, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';
import { KonamiService } from './services/konami.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent{

  darkModeService: DarkModeService = inject(DarkModeService);
  konamiService: KonamiService = inject(KonamiService);

}
