import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Traveller } from 'src/app/domain/traveller/traveller'
import { Country } from 'src/app/domain/country/country'

@Injectable({
  providedIn: 'root',
})
export class TravellerService {
  constructor(private http: HttpClient) {}

  getUserDetail(): Observable<Traveller> {
    return this.http.get<Traveller>('http://localhost:8080/api/v1/user/01')
  }
}
