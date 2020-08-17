import { Component, OnInit, Input } from '@angular/core'
import { CalculateCostService } from '../../service/calculate-cost/calculate-cost.service'
import { Country } from 'src/app/domain/country/country'
import { FormBuilder, Validators } from '@angular/forms'

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
  @Input() totalPerson: number = 1

  travellerForm = this.fb.group({
    title: [{ value: 'Mr.', disabled: true }, Validators.required],
    firstName: [{ value: '', disabled: true }, Validators.required],
    lastName: [{ value: '', disabled: true }, Validators.required],
    beneficiary: [{ value: '', disabled: true }, Validators.required],
    dateOfBirth: [{ value: '', disabled: true }, Validators.required],
    citizenId: [{ value: '', disabled: true }],
    passport: [{ value: '', disabled: true }],
  })

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  gotoPayment() {}
}
