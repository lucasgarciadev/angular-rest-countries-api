import { Component, OnInit } from '@angular/core';
import { RestCountriesApiService } from 'src/app/services/rest-countries-api.service';
import { Country } from 'src/types/Country';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  listCountries: Country[] = [];
  resetFilter: boolean = false;
  resetSearch: boolean = false;

  constructor( private api: RestCountriesApiService ) {}


  ngOnInit(): void {
    this.api.getAllCountries().subscribe({
      next: response => this.listCountries = response,
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
    if(this.resetSearch)
      this.resetSearch = false;

    if(country === '') {
      this.ngOnInit();
    } else {
      this.api.getCountriesByName(country).subscribe(
      {
        next: response => this.listCountries = response,
        error: error => {
          if(error.error.status === 404)
          this.listCountries = [];
        }
      })
    }
      this.resetFilter = true;
  }
}
