import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Package } from 'src/app/domain/package/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  getPackageByCountryId(cid: string): Observable<Package[]> {
    // return of([
    //   { packageId: "01", packageName: "Out Country", packagePrice: "120", countryList: ["01", "02"], companyName: "Allianz" },
    //   { packageId: "02", packageName: "In country", packagePrice: "120", countryList: ["01", "02"], companyName: "Allianz" },
    // ])
    return this.http.get<Package[]>(
      `http://localhost:8080/package/${cid}`
    );
  }
}
