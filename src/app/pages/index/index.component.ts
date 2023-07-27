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

  constructor( private api: RestCountriesApiService ) {}


  ngOnInit(): void {
    console.log('chamou onInit')
    this.api.getAllCountries().subscribe({
      next: response => this.listCountries = response,
      error: () => alert('Erro ao recuperar a lista. Tente novamente mais tarde')
    })
  }

  regionListener(region: string) {
    if(region !== '') {
      this.api.getCountriesByRegion(region).subscribe({
        next: response => this.listCountries = response,
        error: () => alert('Erro ao recuperar a lista. Tente novamente mais tarde')
      })
    } else {
      this.ngOnInit();
    }
  }

  searchByNameListener(country: string) {
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
  }
}
