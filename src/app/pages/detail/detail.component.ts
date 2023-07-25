import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country, Currency } from 'src/types/Country';
import { RestCountriesApiService } from '../../services/rest-countries-api.service';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit{

  faArrowLeft = faArrowLeft;
  data?: Country;
  name: string = '';

  constructor( private activatedRoute: ActivatedRoute, private api: RestCountriesApiService, private router: Router ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(_ => {
      this.getCountryByCioc(this.activatedRoute.snapshot.params['name']);
    })
  }

  getCountryByCioc(cioc: string | null = null) {
    this.api.getCountryByCioc(cioc).subscribe(
      response => {
        this.data = response[0];
        console.log(this.data);
      }
    )
  }

  redirectDetail(country: string) {
    this.router.navigate([`detail/${country}`]);
  }

  manageCurrencies() {
    let currencies: string[] = [];
    (Object.values<Currency>(this.data?.currencies)).forEach((currency: Currency) => {
      currencies.push(currency.name)
    })
    return currencies.join(', ')
  }

  manageLanguages() {
    let languages: string[] = [];
    (Object.values<any>(this.data?.languages)).forEach(language => {
      languages.push(language)
    })
    return languages.join(', ')
  }

}
