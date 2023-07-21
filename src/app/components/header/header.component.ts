import { Component, ViewEncapsulation } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  faMoon = faMoon;
  faSun = faSun;
  darkMode: boolean = false;

  toggleTheme() {

    this.darkMode = !this.darkMode;

    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light')

    // document.body.classList.toggle('dark-theme');
  }
}
