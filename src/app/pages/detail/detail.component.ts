import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/types/Country';
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
      // this.ngOnInit();
      this.getCountryByCioc(this.activatedRoute.snapshot.params['name']);
    })
  }

  getCountryByCioc(cioc: string | null = null) {
    this.api.getCountryByCioc(cioc).subscribe(
      response => {
        this.data = response[0];
      }
    )
  }

  redirectDetail(country: string) {
    this.router.navigate([`detail/${country}`]);
  }

}
