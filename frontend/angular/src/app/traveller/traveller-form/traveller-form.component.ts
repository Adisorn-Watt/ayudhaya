import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Traveller } from 'src/app/domain/traveller/traveller'

@Component({
  selector: 'app-traveller-form',
  templateUrl: './traveller-form.component.html',
  styleUrls: ['./traveller-form.component.scss'],
})
export class TravellerFormComponent implements OnInit {
  @Input() traveller: Traveller
  @Output() beneficiaryChange = new EventEmitter<string>()

  public editable = false

  travellerForm = this.fb.group({
    title: [{ value: 'Mr.', disabled: true }, Validators.required],
    firstName: [{ value: '', disabled: true }, Validators.required],
    lastName: [{ value: '', disabled: true }, Validators.required],
    beneficiary: [{ value: '' }, Validators.required],
    dateOfBirth: [{ value: '', disabled: true }, Validators.required],
    citizenId: [{ value: '', disabled: true }],
    passport: [{ value: '', disabled: true }],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.travellerForm.get('title').setValue(this.traveller.title)
    this.travellerForm.get('firstName').setValue(this.traveller.firstName)
    this.travellerForm.get('lastName').setValue(this.traveller.lastName)
    this.travellerForm.get('citizenId').setValue(this.traveller.citizenId)
    this.travellerForm.get('passport').setValue(this.traveller.passportId)
    this.travellerForm.get('dateOfBirth').setValue(this.traveller.dateOfBirth)
    this.travellerForm.get('beneficiary').setValue(this.traveller.beneficialName)
  }

  toggleEditable(): void {
    if (!this.editable) {
      this.travellerForm.get('title').reset({ value: 'Mr.', disabled: false })
      this.travellerForm.get('firstName').reset({ value: '', disabled: false })
      this.travellerForm.get('lastName').reset({ value: '', disabled: false })
      this.travellerForm.get('citizenId').reset({ value: '', disabled: false })
      this.travellerForm.get('passport').reset({ value: '', disabled: false })
      this.travellerForm.get('dateOfBirth').reset({ value: '', disabled: false })
      this.travellerForm.get('beneficiary').reset({ value: '', disabled: false })
    } else {
      this.travellerForm.get('title').reset({ value: this.traveller.title, disabled: true })
      this.travellerForm.get('firstName').reset({ value: this.traveller.firstName, disabled: true })
      this.travellerForm.get('lastName').reset({ value: this.traveller.lastName, disabled: true })
      this.travellerForm.get('citizenId').reset({ value: this.traveller.citizenId, disabled: true })
      this.travellerForm.get('passport').reset({ value: this.traveller.passportId, disabled: true })
      this.travellerForm.get('dateOfBirth').reset({ value: this.traveller.dateOfBirth, disabled: true })
      this.travellerForm.get('beneficiary').reset({ value: this.traveller.beneficialName, disabled: false })
    }

    this.editable = !this.editable
  }

  onChangeBeneficiary(): void {
    this.beneficiaryChange.emit(this.travellerForm.get('beneficiary').value)
  }
}
