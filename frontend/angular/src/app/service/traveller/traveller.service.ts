import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Traveller } from 'src/app/domain/traveller/traveller'

@Injectable({
  providedIn: 'root',
})
export class TravellerService {
  constructor(private http: HttpClient) {}

  getUserDetail(): Observable<Traveller> {
    return this.http.get<Traveller>('http://159.65.135.237:8080/api/v1/user/01')
  }
}
