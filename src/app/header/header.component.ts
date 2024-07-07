import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, OnInit, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  darkMode = signal(false)

  @HostBinding('class.dark') get mode() {
    return this.darkMode;
  }

}
