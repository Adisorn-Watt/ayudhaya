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
  userInfo: Traveller
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

  onNext(): void {
    if (this.userInfo.beneficialName !== '') {
      this.centralStore.setUserInfo(this.userInfo)
      this.formFilled = true
    } else {
      this.toastrService.show(`Please input your beneficiary name`, 'Form not completed', { status: 'warning', destroyByClick: true })
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
    this.userInfo.beneficialName = e
  }
}
