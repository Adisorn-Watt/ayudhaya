import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CountryComponent } from './country/country.component'
import { InsuranceSummaryComponent } from './insurance-summary/insurance-summary.component'
import { PackageComponent } from './package/package.component'
import { PickDateComponent } from './pick-date/pick-date.component'
import { MainInsuranceComponent } from './main-insurance/main-insurance.component'

const routes: Routes = [
  { path: 'country', component: CountryComponent },
  { path: 'insurance-summary', component: InsuranceSummaryComponent },
  { path: 'pick-date', component: PickDateComponent },
  { path: 'package', component: PackageComponent },
  { path: '', component: MainInsuranceComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsuranceRoutingModule {}
