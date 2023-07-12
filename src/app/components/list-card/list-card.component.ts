import { Component, Input } from '@angular/core';
import { Country } from 'src/types/Country';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.sass']
})
export class ListCardComponent {

  @Input() listCountries: Country[] = [];

}
