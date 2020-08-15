import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryService } from 'src/app/service/country/country.service';
import { Country } from 'src/app/domain/country/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() countries: Country[]
  @Output() countryCardClick = new EventEmitter<Country>();

  // public countries: Country[];

  constructor() { }

  ngOnInit(): void {
    // this.countryService.getAllCountries().subscribe(countries => {
    //   this.countries = countries
    // })
  }

  onClickCountryCard(c: Country) {
    this.countryCardClick.emit(c);
  }

}
