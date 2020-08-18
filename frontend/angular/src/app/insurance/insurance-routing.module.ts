import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainInsuranceComponent } from './main-insurance/main-insurance.component'

const routes: Routes = [{ path: '', component: MainInsuranceComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceRoutingModule {}
