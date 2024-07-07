import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  darkModeService: DarkModeService = inject(DarkModeService);

  toggleDarkMode() {
    this.darkModeService.updateDarkMode();
    console.log('clicked')
  }
}
