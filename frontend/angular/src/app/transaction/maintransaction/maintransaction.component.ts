import { Component, OnInit } from '@angular/core'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'
import { CalculateCostService } from 'src/app/service/calculate-cost/calculate-cost.service'
import { TransactionService } from '../../service/transaction/transaction.service'
import { Transaction } from '../../domain/transaction/transaction'
import { NbToastrService } from '@nebular/theme'
import { Router } from '@angular/router'

@Component({
  selector: 'app-maintransaction',
  templateUrl: './maintransaction.component.html',
  styleUrls: ['./maintransaction.component.scss'],
})
export class MaintransactionComponent implements OnInit {
  public user: any
  public costPerPerson: number
  public note: string
  public selectedDate: { start: string; end: string }
  public isSubmitted = false

  constructor(
    private centralStore: CentralStoreService,
    public calculateService: CalculateCostService,
    private transactionService: TransactionService,
    public toastrService: NbToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.centralStore.getUserInfo()
    this.selectedDate = this.centralStore.getSelectedDate()
    this.costPerPerson = this.calculateService.getInsuranceCost(this.selectedDate.start, this.selectedDate.end)
  }

  onConfirm(): any {
    const t: Transaction = new Transaction()
    t.transactionId = Math.random().toString(36).substring(7) // HARDCODE
    t.countryId = this.centralStore.getSelectedCountry().countryId
    t.packageId = '01' // HARDCODE
    t.user = this.user
    if (t.user.citizenId == null || t.user.citizenId == '') {
      t.user.citizenId = null
    }
    if (t.user.passportId == null || t.user.passportId == '') {
      t.user.passportId = null
    }
    t.user.dateOfBirth = this.getFormattedDate(this.user.dateOfBirth)
    t.amount = this.costPerPerson * 1 // HARDCODE
    t.startDate = this.getFormattedDate(this.centralStore.getSelectedDate().start)
    t.endDate = this.getFormattedDate(this.centralStore.getSelectedDate().end)
    this.transactionService.addTransaction(t).subscribe(
      (transaction) => {
        this.isSubmitted = true
        this.toastrService.show(`Enjoy your trip!`, 'Transaction completed', {
          status: 'success',
          destroyByClick: true,
          duration: 5000,
        })
      },
      (err) => {
        this.toastrService.show(`Opps, look like something is wrong with our server`, 'Internal error', {
          status: 'danger',
          destroyByClick: true,
          duration: 5000,
        })
      }
    )
  }

  getFormattedDate(date: string) {
    const d = date.split('-')
    const rd = `${d[2]}/${d[1]}/${d[0]}`
    return rd
  }
}
