import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Country } from 'src/app/domain/country/country'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() countries: Country[]
  @Output() countryCardClick = new EventEmitter<Country>()

  constructor() {}

  ngOnInit(): void {}

  onClickCountryCard(c: Country): void {
    this.countryCardClick.emit(c)
  }
}
