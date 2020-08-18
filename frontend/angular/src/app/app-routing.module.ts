import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./insurance/insurance.module').then((m) => m.InsuranceModule),
  },
  {
    path: 'traveller',
    loadChildren: () => import('./traveller/traveller.module').then((m) => m.TravellerModule),
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then((m) => m.TransactionModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
