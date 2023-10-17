import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = false;

  static readonly matAppBackgroundStyleName = 'mat-app-background';
  static readonly darkStyleName = 'app-dark-theme';
  static readonly lightStyleName = 'app-light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
    document.body.classList.add(ThemeService.matAppBackgroundStyleName);
    document.body.classList.add(ThemeService.lightStyleName);
  }

  public toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.add(ThemeService.lightStyleName);
      document.body.classList.remove(ThemeService.darkStyleName);
    } else {
      document.body.classList.add(ThemeService.darkStyleName);
      document.body.classList.remove(ThemeService.lightStyleName);
    }
    this.isDark = !this.isDark
  }
}
