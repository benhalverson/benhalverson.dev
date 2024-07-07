import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }
  darkModeSignal = signal<string>('null');

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value === 'dark' ? 'light' : 'dark'));
    console.log('dark mode signal updated', this.darkModeSignal())
  }
}
