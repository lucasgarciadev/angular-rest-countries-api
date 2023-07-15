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

  regionListener(region: string) {
    if(region === '') {
      this.ngOnInit();
    } else {
      this.api.getCountriesByRegion(region).subscribe({
        next: response => this.listCountries = response,
        error: () => alert('Erro ao recuperar a lista. Tente novamente mais tarde')
      })
    }
  }

  searchByNameListener(country: string) {
    console.log('Chegou no listener');
    this.api.getCountriesByName(country).subscribe({
      next: response => this.listCountries = response,
      error: error => {
        if(error.error.status === 404)
          this.listCountries = [];
      }
    })
  }

}
