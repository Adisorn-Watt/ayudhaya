import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MaintransactionComponent } from './maintransaction/maintransaction.component'

const routes: Routes = [{ path: '', component: MaintransactionComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
