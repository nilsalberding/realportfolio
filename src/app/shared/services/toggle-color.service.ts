import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleColorService {

  isDarkMode = false;


  constructor() { }


  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    document.documentElement.classList.toggle('natural-light', this.isDarkMode);
  }
}


