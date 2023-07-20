import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, debounceTime, distinct, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { Country } from 'src/types/Country';


const API_HOST = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesApiService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCountries(): Observable<Country[]> {
    const url = API_HOST + '/all';
    return this.http.get<Country[]>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = API_HOST + `/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByName(name: string): Observable<Country[]> {
    const url = API_HOST + `/name/${name}`;
    return this.http.get<Country[]>(url).pipe(
      debounceTime(300),
      filter(() => name.length >= 3),
      distinctUntilChanged()
    );
  }

  getCountryByCioc(cioc: string | null): Observable<Country[]> {
    const url = API_HOST + `/alpha/${cioc}`;
    return this.http.get<Country[]>(url);
  }

}
