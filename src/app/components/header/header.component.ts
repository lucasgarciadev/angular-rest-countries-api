import { Component, ViewEncapsulation } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  faMoon = faMoon;
}
