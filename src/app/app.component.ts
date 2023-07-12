import { Component, OnInit } from '@angular/core';
import { RestCountriesApiService } from './services/rest-countries-api.service';
import { Country } from 'src/types/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-rest-countries-api';

  listCountries: Country[] = [];

  constructor(
    private api: RestCountriesApiService
  ) {

  }

  ngOnInit(): void {
    this.api.getAllCountries().subscribe({
      next: response => {
        this.listCountries = response;
        console.log(response);
      },
      error: () => alert('Erro ao recuperar a lista. Tente novamente mais tarde')
    })
  }

}
