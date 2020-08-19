import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router'
import { CalculateCostService } from '../../service/calculate-cost/calculate-cost.service'
import { Country } from 'src/app/domain/country/country'
import { Package } from 'src/app/domain/package/package'

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

  constructor(private router: Router, private calculateCost: CalculateCostService) {}

  ngOnInit(): void {
    this.setInsuranceCost()
    this.setDaysDifferent()
  }

  confirmInsurance(): void {
    this.router.navigateByUrl('/traveller')
  }

  setInsuranceCost(): void {
    this.insuranceCost = this.calculateCost.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }

  setDaysDifferent(): void {
    this.daysDifferent = this.calculateCost.getDaysDifferent(this.selectedDate.start, this.selectedDate.end)
  }
}
