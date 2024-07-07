import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class KonamiService {
  private konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
  ];

  private konamiCodePosition = 0;

  constructor(
    private readonly router: Router,
    @Inject(PLATFORM_ID) private readonly platformId: Object
  ) {
    this.initializeKonamiCodeListener();
  }

  private initializeKonamiCodeListener() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('keydown', (event) => this.handleKeyDown(event));
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const key = event.code;

    const requiredKey = this.konamiCode[this.konamiCodePosition];

    if (key === requiredKey) {
      this.konamiCodePosition++;
      if (this.konamiCodePosition === this.konamiCode.length) {
        this.triggerKonamiCode();
      }
    }
  }

  private triggerKonamiCode() {
    this.konamiCodePosition = 0;
    this.router.navigate(['/game']);
  }
}
