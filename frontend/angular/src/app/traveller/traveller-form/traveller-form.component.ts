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
  @Output() dateOfBirthChange = new EventEmitter<string>()
  @Output() firstNameChange = new EventEmitter<string>()
  @Output() lastNameChange = new EventEmitter<string>()
  @Output() citizenIdChange = new EventEmitter<string>()
  @Output() titleChange = new EventEmitter<string>()
  @Output() identificationChange = new EventEmitter<{type:any, number: any}>()

  public editable = true
  public selectedIdentification = 'citizenId'

  travellerForm = this.fb.group({
    title: [{ value: 'Mr.' }, Validators.required],
    firstName: [{ value: ''}, Validators.required],
    lastName: [{ value: ''}, Validators.required],
    beneficiary: [{ value: '' }, Validators.required],
    dateOfBirth: [{ value: '' }, Validators.required],
    citizenId: [{ value: ''}],
    passport: [{ value: '', disabled: true }],
    identification: [{value: ''}]
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.travellerForm.get('title').setValue(this.traveller.title)
    // this.travellerForm.get('firstName').setValue(this.traveller.firstName)
    // this.travellerForm.get('lastName').setValue(this.traveller.lastName)
    // this.travellerForm.get('citizenId').setValue(this.traveller.citizenId)
    // this.travellerForm.get('passport').setValue(this.traveller.passportId)
    // this.travellerForm.get('dateOfBirth').setValue(this.traveller.dateOfBirth)
    // this.travellerForm.get('beneficiary').setValue(this.traveller.beneficialName)
    // this.travellerForm.get('identification').setValue(this.traveller.passportId || this.traveller.citizenId)
    // this.selectedIdentification = this.traveller.citizenId ? 'citizenId' : 'passport'
    this.travellerForm.get('title').setValue('')
    this.travellerForm.get('firstName').setValue('')
    this.travellerForm.get('lastName').setValue('')
    this.travellerForm.get('citizenId').setValue('')
    this.travellerForm.get('passport').setValue('')
    this.travellerForm.get('dateOfBirth').setValue('')
    this.travellerForm.get('beneficiary').setValue('')
    this.travellerForm.get('identification').setValue('')
    // this.selectedIdentification = this.traveller.citizenId ? 'citizenId' : 'passport'
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
  onChangeDateOfBirth(): void {
    this.dateOfBirthChange.emit(this.travellerForm.get('dateOfBirth').value)
  }
  onChangeFirstName(): void {
    this.firstNameChange.emit(this.travellerForm.get('firstName').value)
  }
  onChangeLastName(): void {
    this.lastNameChange.emit(this.travellerForm.get('lastName').value)
  }
  onChangeCitizenId(): void {
    this.citizenIdChange.emit(this.travellerForm.get('citizenId').value)
  }
  onChangeTitle(): void {
    this.titleChange.emit(this.travellerForm.get('title').value)
  }
  onChangeIdentification(): void {
    const idType = this.selectedIdentification
    this.identificationChange.emit({type: idType, number: this.travellerForm.get('identification').value})
  }
}
