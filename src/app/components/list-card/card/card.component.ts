import { Component, Input } from '@angular/core';
import { Country } from 'src/types/Country';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() data?: Country;

}
