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

  travellerForm = this.fb.group({
    title: [{ value: 'Mr.', disabled: true }, Validators.required],
    firstName: [{ value: '', disabled: true }, Validators.required],
    lastName: [{ value: '', disabled: true }, Validators.required],
    beneficiary: [{ value: '', disabled: true }, Validators.required],
    dateOfBirth: [{ value: '', disabled: true }, Validators.required],
    citizenId: [{ value: '', disabled: true }],
    passport: [{ value: '', disabled: true }],
  })

  contactForm = this.fb.group({
    email: [{ value: '', disabled: true }, Validators.required],
    mobileNo: [{ value: '', disabled: true }, Validators.required],
  })

  constructor(public fb: FormBuilder, public centralStore: CentralStoreService) {}

  ngOnInit(): void {
    this.travellerForm.get('title').setValue(this.traveller.title)
    this.travellerForm.get('firstName').setValue(this.traveller.firstName)
    this.travellerForm.get('lastName').setValue(this.traveller.lastName)
    this.travellerForm.get('citizenId').setValue(this.traveller.citizenId)
    this.travellerForm.get('passport').setValue(this.traveller.passportId)
    this.travellerForm.get('dateOfBirth').setValue(this.traveller.dateOfBirth)
    this.travellerForm.get('beneficiary').setValue(this.traveller.beneficialName)
    this.contactForm.get('email').setValue(this.traveller.email)
    this.contactForm.get('mobileNo').setValue(this.traveller.mobileNo)
  }
}
