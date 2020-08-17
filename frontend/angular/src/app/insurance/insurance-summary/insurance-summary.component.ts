import { Component, OnInit, Input } from '@angular/core'
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router'
import { CentralStoreService } from '../../service/central-store/central-store.service'
import { CalculateCostService } from '../../service/calculate-cost/calculate-cost.service'
import { Country } from 'src/app/domain/country/country'
import { Package } from 'src/app/domain/package/package'
import { from } from 'rxjs'

@Component({
  selector: 'app-insurance-summary',
  templateUrl: './insurance-summary.component.html',
  styleUrls: ['./insurance-summary.component.scss'],
})
export class InsuranceSummaryComponent implements OnInit {
  @Input() selectedCountry: Country
  @Input() selectedPackage: Package
  @Input() selectedDate: { start: string; end: string }
  public insuranceCost: number
  public daysDifferent: number

  constructor(private centralStore: CentralStoreService, private router: Router, private calculateCost: CalculateCostService) {}

  ngOnInit(): void {
    console.log(this.selectedDate)
    this.getInsuranceCost()
    this.getDaysDifferent()
  }

  confirmInsurance(): void {
    this.router.navigateByUrl('/traveller')
  }

  getInsuranceCost() {
    this.insuranceCost = this.calculateCost.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }

  getDaysDifferent() {
    this.daysDifferent = this.calculateCost.getDaysDifferent(this.selectedDate.start, this.selectedDate.end)
  }
}
