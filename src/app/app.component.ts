import { Component, OnInit } from '@angular/core';
import { RestCountriesApiService } from './services/rest-countries-api.service';
import { Country } from 'src/types/Country';
import { pipe, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-rest-countries-api';

  listCountries: Country[] = [];
  resetFilter: boolean = false;
  resetSearch: boolean = false;

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
    this.resetSearch = true;
    if(region === '') {
      this.ngOnInit();
    } else {
      this.api.getCountriesByRegion(region).subscribe({
        next: response => {
          this.resetFilter = false;
          this.listCountries = response
        },
        error: () => alert('Erro ao recuperar a lista. Tente novamente mais tarde')
      })
    }
  }

  searchByNameListener(country: string) {
    this.resetSearch = false;
    if(country === '') {
      this.ngOnInit();
    } else {
      this.api.getCountriesByName(country).subscribe(
      {
        next: response => {
          console.log('fez a req');
          this.listCountries = response
        },
        error: error => {
          if(error.error.status === 404)
          this.listCountries = [];
        }
      })
    }
      this.resetFilter = true;
  }

}
