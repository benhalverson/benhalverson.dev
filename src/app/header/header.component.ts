import { ChangeDetectionStrategy, Component, inject, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
    selector: 'app-header',
    imports: [RouterModule],
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  darkMoodeEnabled = false;
  projectsEnabled = false;

  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
    console.log('clicked')
  }
}
