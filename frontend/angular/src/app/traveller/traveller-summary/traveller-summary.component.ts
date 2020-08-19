import { Component, OnInit, Input } from '@angular/core'
import { Country } from 'src/app/domain/country/country'
import { FormBuilder, Validators } from '@angular/forms'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'
import { Traveller } from 'src/app/domain/traveller/traveller'

@Component({
  selector: 'app-traveller-summary',
  templateUrl: './traveller-summary.component.html',
  styleUrls: ['./traveller-summary.component.scss'],
})
export class TravellerSummaryComponent implements OnInit {
  @Input() country: Country
  @Input() date: { start: string; end: string }
  @Input() insuranceCost: number
  @Input() totalDay: number
  @Input() costPerPerson: number
  @Input() totalPerson = 1
  @Input() traveller: Traveller

  constructor() {}

  ngOnInit(): void {}
}
