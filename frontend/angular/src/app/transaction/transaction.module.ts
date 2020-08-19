import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TransactionRoutingModule } from './transaction-routing.module'
import { MaintransactionComponent } from './maintransaction/maintransaction.component'
import { NbCardModule, NbUserModule, NbButtonModule, NbInputModule } from '@nebular/theme'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [MaintransactionComponent],
  imports: [CommonModule, TransactionRoutingModule, NbCardModule, NbUserModule, NbButtonModule, NbInputModule, FormsModule],
})
export class TransactionModule {}
