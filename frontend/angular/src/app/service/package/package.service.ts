import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { Package } from 'src/app/domain/package/package'

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  getPackageByCountryId(cid: string): Observable<Package[]> {
    return this.http.get<Package[]>(`http://localhost:8080/api/v1/package/${cid}`)
  }
}
