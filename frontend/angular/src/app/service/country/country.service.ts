import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Country } from 'src/app/domain/country/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    // return of([
    //   { countryId: "01", countryName: "Germany" },
    //   { countryId: "02", countryName: "Thailand" },
    // ])
    return this.http.get<Country[]>(
      'http://localhost:8080/country'
    );
  }



}
