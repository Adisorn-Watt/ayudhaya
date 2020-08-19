import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Country } from 'src/app/domain/country/country'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    // return this.http.get<Country[]>('http://localhost:8080/api/v1/country')
    return this.http.get<Country[]>('http://159.65.135.237:8080/api/v1/country')
  
  }
}
