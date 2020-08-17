import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainTravellerComponent } from './main-traveller/main-traveller.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { TravellerSummaryComponent } from './traveller-summary/traveller-summary.component'
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component'
import { TravellerFormComponent } from './traveller-form/traveller-form.component'

const routes: Routes = [
  { path: '', component: MainTravellerComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'travellersummary', component: TravellerSummaryComponent },
  { path: 'terms', component: TermAndConditionComponent },
  { path: 'travellerform', component: TravellerFormComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravellerRoutingModule {}
