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
  userInfo: Traveller = new Traveller()
  filledUserInfo: Traveller = new Traveller()
  selectedCountry: Country
  selectedDate: { start: string; end: string }

  constructor(
    private dialogService: NbDialogService,
    public travellerService: TravellerService,
    public centralStore: CentralStoreService,
    public calculateService: CalculateCostService,
    public toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.travellerService.getUserDetail().subscribe((u) => {
      this.userInfo = u[0]
    })
    this.selectedCountry = this.centralStore.getSelectedCountry()
    this.selectedDate = this.centralStore.getSelectedDate()
    this.centralStore.setUserInfo(this.userInfo)
    this.centralStore.setCostPerPerson(this.costPerPerson)
  }

  get costPerPerson() {
    return this.calculateService.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }

  get totalDay(): number {
    return this.calculateService.getDaysDifferent(this.selectedDate.start, this.selectedDate.end)
  }

  isAllFieldFilled() {
    console.log('a', this.filledUserInfo)
    const contactForm = this.filledUserInfo.mobileNo && this.filledUserInfo.email  
    const travellerForm = this.filledUserInfo.title  && this.filledUserInfo.firstName  && this.filledUserInfo.lastName && this.filledUserInfo.dateOfBirth  && this.filledUserInfo.beneficialName
    const identification = this.filledUserInfo.passportId  || this.filledUserInfo.citizenId 
    console.log('contactForm',contactForm)
    console.log('travellerForm',travellerForm)
    console.log('identification',identification )
    return (this.filledUserInfo && contactForm && travellerForm && identification)
  }

  onNext(): void {
    const allFilled = this.isAllFieldFilled() 
    if (allFilled) {
      this.centralStore.setUserInfo(this.userInfo)
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
    this.centralStore.setUserInfo(this.userInfo)
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
    if(e.type == 'citizenId') {
      this.filledUserInfo.citizenId = e.number
    } else {
      this.filledUserInfo.passportId = e.number
    }
  }
}
