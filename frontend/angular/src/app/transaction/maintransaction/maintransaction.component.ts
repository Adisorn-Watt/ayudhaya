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
    t.note = this.note || ''
    t.amount = this.costPerPerson * 1 // HARDCODE
    t.startDate = this.centralStore.getSelectedDate().start
    t.endDate = this.centralStore.getSelectedDate().end
    console.log(t)
    this.transactionService.addTransaction(t).subscribe(
      (transaction) => {
        this.isSubmitted = true
        this.toastrService.show(`We will redirect you to frontpage shortly`, 'Insurance bought!', { status: 'success', destroyByClick: true })
        setTimeout(() => this.router.navigateByUrl('/'), 3000)
      },
      (err) => {
        this.toastrService.show(`Opps, look like something is wrong with our server`, 'Internal error', { status: 'danger', destroyByClick: true })
      }
    )
  }
}
