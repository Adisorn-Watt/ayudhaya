import { Component, OnInit, Input } from '@angular/core'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'
import { CalculateCostService } from 'src/app/service/calculate-cost/calculate-cost.service'

@Component({
  selector: 'app-maintransaction',
  templateUrl: './maintransaction.component.html',
  styleUrls: ['./maintransaction.component.scss'],
})
export class MaintransactionComponent implements OnInit {
  public user: any
  public costPerPerson: any
  @Input() selectedDate: { start: string; end: string }
  constructor(private centralStore: CentralStoreService, public calculateService: CalculateCostService) {}

  ngOnInit(): void {
    this.user = this.centralStore.getUser()
    this.selectedDate = this.centralStore.getSelectedDate()
    this.getCostPerPerson()
    console.log('a')
    this.centralStore.setCostPerPerson(this.getCostPerPerson())
  }

  getCostPerPerson(): any {
    this.costPerPerson = this.calculateService.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }
}
