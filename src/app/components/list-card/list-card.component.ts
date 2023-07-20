import { Component, Input } from '@angular/core';
import { Country } from 'src/types/Country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent {

  @Input() listCountries: Country[] = [];

  constructor(private router: Router) {}

  redirectToDetail(country: Country) {
    this.router.navigate([`detail/${country.cioc}`]);
  }

}
