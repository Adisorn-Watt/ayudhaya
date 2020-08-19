import { Component, OnInit } from '@angular/core'
import { NbDialogService, NbToastrService } from '@nebular/theme'
import { TermAndConditionComponent } from '../term-and-condition/term-and-condition.component'
import { TravellerService } from 'src/app/service/traveller/traveller.service'
import { Traveller } from 'src/app/domain/traveller/traveller'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'
import { Country } from 'src/app/domain/country/country'
import { CalculateCostService } from 'src/app/service/calculate-cost/calculate-cost.service'

@Component({
  selector: 'app-main-traveller',
  templateUrl: './main-traveller.component.html',
  styleUrls: ['./main-traveller.component.scss'],
})
export class MainTravellerComponent implements OnInit {
  formFilled = false
  filledUserInfo: Traveller = new Traveller()
  selectedCountry: Country
  selectedDate: { start: string; end: string }
  travellerFormValid = false
  contactFormValid = false

  constructor(
    private dialogService: NbDialogService,
    public travellerService: TravellerService,
    public centralStore: CentralStoreService,
    public calculateService: CalculateCostService,
    public toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.travellerService.getUserDetail().subscribe((u) => {
      this.filledUserInfo.fromBankBalance = u[0].fromBankBalance
      this.filledUserInfo.fromBankName = u[0].fromBankName
      this.filledUserInfo.fromBankNo = u[0].fromBankNo
    })
    this.selectedCountry = this.centralStore.getSelectedCountry()
    this.selectedDate = this.centralStore.getSelectedDate()
    this.centralStore.setCostPerPerson(this.costPerPerson)
  }

  get costPerPerson() {
    return this.calculateService.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }

  get totalDay(): number {
    return this.calculateService.getDaysDifferent(this.selectedDate.start, this.selectedDate.end)
  }

  onNext(): void {
    const allFilled = this.travellerFormValid && this.contactFormValid
    if (allFilled) {
      this.centralStore.setUserInfo(this.filledUserInfo)
      this.formFilled = true
    } else {
      this.toastrService.show(`Please input all the required form`, 'Form not completed', { status: 'warning', destroyByClick: true })
    }
  }

  gotoForm(): void {
    this.formFilled = false
  }

  showDialog(): void {
    this.dialogService.open(TermAndConditionComponent, {
      hasScroll: true,
      autoFocus: true,
    })
    this.centralStore.setUserInfo(this.filledUserInfo)
  }

  handleBeneficiary(e: string) {
    this.filledUserInfo.beneficialName = e
  }
  handleDateOfBirth(e: string) {
    this.filledUserInfo.dateOfBirth = e
  }
  handleFirstName(e: string) {
    this.filledUserInfo.firstName = e
  }
  handleLastName(e: string) {
    this.filledUserInfo.lastName = e
  }
  handleCitizenId(e: string) {
    this.filledUserInfo.citizenId = e
  }
  handleTitle(e: string) {
    this.filledUserInfo.title = e
  }
  handleMobileNumber(e: string) {
    this.filledUserInfo.mobileNo = e
  }
  handleEmail(e: string) {
    this.filledUserInfo.email = e
  }
  handleIdentification(e: any) {
    if (e.type == 'citizenId') {
      this.filledUserInfo.citizenId = e.number
    } else {
      this.filledUserInfo.passportId = e.number
    }
  }
  handleTravellerFormValid(e: any) {
    this.travellerFormValid = e
  }
  handleContactFormValid(e: any) {
    this.contactFormValid = e
  }
}
