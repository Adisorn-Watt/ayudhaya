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
  @Input() editable: boolean = true
  @Output() beneficiaryChange = new EventEmitter<string>()
  @Output() dateOfBirthChange = new EventEmitter<string>()
  @Output() firstNameChange = new EventEmitter<string>()
  @Output() lastNameChange = new EventEmitter<string>()
  @Output() citizenIdChange = new EventEmitter<string>()
  @Output() titleChange = new EventEmitter<string>()
  @Output() identificationChange = new EventEmitter<{ type: any; number: any }>()
  @Output() formValid = new EventEmitter<boolean>()

  travellerForm = this.fb.group({
    title: [{ value: '', disabled: !this.editable }, Validators.required],
    firstName: [{ value: '', disabled: !this.editable }, [Validators.required, Validators.minLength(4)]],
    lastName: [{ value: '', disabled: !this.editable }, [Validators.required, Validators.minLength(4)]],
    beneficiary: [{ value: '', disabled: !this.editable }, Validators.required],
    dateOfBirth: [{ value: '', disabled: !this.editable }, Validators.required],
    identificationType: [{ value: '', disabled: !this.editable }, Validators.required],
    identificationNumber: [{ value: '', disabled: !this.editable }, [Validators.required, Validators.minLength(13)]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.editable) {
      console.log(this.traveller)
      this.travellerForm.get('title').reset({ value: this.traveller.title, disabled: true })
      this.travellerForm.get('firstName').reset({ value: this.traveller.firstName, disabled: true })
      this.travellerForm.get('lastName').reset({ value: this.traveller.lastName, disabled: true })
      this.travellerForm.get('identificationType').reset({ value: this.traveller.citizenId ? 'citizenId' : 'passport', disabled: true })
      this.travellerForm
        .get('identificationNumber')
        .reset({ value: this.traveller.citizenId ? this.traveller.citizenId : this.traveller.passportId, disabled: true })
      this.travellerForm.get('dateOfBirth').reset({ value: this.traveller.dateOfBirth, disabled: true })
      this.travellerForm.get('beneficiary').reset({ value: this.traveller.beneficialName, disabled: true })
    }
  }

  onChangeTitle(): void {
    this.titleChange.emit(this.travellerForm.get('title').value)
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeFirstName(): void {
    this.firstNameChange.emit(this.travellerForm.get('firstName').value)
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeLastName(): void {
    this.lastNameChange.emit(this.travellerForm.get('lastName').value)
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeIdentification(): void {
    const idType = this.travellerForm.get('identificationType').value
    this.identificationChange.emit({ type: idType, number: this.travellerForm.get('identificationNumber').value })
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeDateOfBirth(): void {
    this.dateOfBirthChange.emit(this.travellerForm.get('dateOfBirth').value)
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeBeneficiary(): void {
    this.beneficiaryChange.emit(this.travellerForm.get('beneficiary').value)
    this.formValid.emit(this.travellerForm.valid)
  }

  get firstName() {
    const firstName = this.travellerForm.get('firstName')
    return firstName.touched ? (firstName.valid ? 'success' : 'danger') : 'basic'
  }

  get lastName() {
    const lastName = this.travellerForm.get('lastName')
    return lastName.touched ? (lastName.valid ? 'success' : 'danger') : 'basic'
  }

  get dateOfBirth() {
    const dateOfBirth = this.travellerForm.get('dateOfBirth')
    return dateOfBirth.touched ? (dateOfBirth.valid ? 'success' : 'danger') : 'basic'
  }

  get identificationType() {
    const identificationType = this.travellerForm.get('identificationType')
    return identificationType.touched ? (identificationType.valid ? 'success' : 'danger') : 'basic'
  }

  get identificationNumber() {
    const identificationNumber = this.travellerForm.get('identificationNumber')
    return identificationNumber.touched ? (identificationNumber.valid ? 'success' : 'danger') : 'basic'
  }

  get title() {
    const title = this.travellerForm.get('title')
    return title.touched ? (title.valid ? 'success' : 'danger') : 'basic'
  }

  get beneficiary() {
    const beneficiary = this.travellerForm.get('beneficiary')
    return beneficiary.touched ? (beneficiary.valid ? 'success' : 'danger') : 'basic'
  }
}
