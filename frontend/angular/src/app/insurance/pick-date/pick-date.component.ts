import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../service/package/package.service'
import { CountryService } from '../../service/country/country.service'

@Component({
  selector: 'app-pick-date',
  templateUrl: './pick-date.component.html',
  styleUrls: ['./pick-date.component.css']
})
export class PickDateComponent implements OnInit {

  public selectedStartDate: string = this.getFormattedDate(new Date());
  public selectedEndDate: string = this.getFormattedDate(new Date());

  constructor(private packageService: PackageService, private countryService: CountryService) { }

  ngOnInit(): void {
    console.log('country', this.countryService.getAllCountries())
    console.log('package', this.packageService.getPackageByCountryId("01"));

    this.countryService.getAllCountries().subscribe(p => {
      console.log(p)
    })
    this.packageService.getPackageByCountryId("01").subscribe(p => {
      console.log(p)
    })
  }

  onChange(e) {
    console.log(e)
  }

  addDays(date: Date, days: number): Date {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
  }

  report() {
    console.log(typeof (this.selectedStartDate))
    console.log(this.selectedStartDate)
  }


  getFormattedDate(date: Date) {
    return date.toISOString().split('T')[0]
  }


  get maxDate() {
    const startDate = new Date(this.selectedStartDate);
    return this.getFormattedDate(this.addDays(startDate, 180));
    //return this.addDays(this.selectedStartDate, 180);
  }

}
