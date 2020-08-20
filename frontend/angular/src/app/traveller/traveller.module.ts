import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TravellerRoutingModule } from './traveller-routing.module'
import { MainTravellerComponent } from './main-traveller/main-traveller.component'
import { ContactFormComponent } from './contact-form/contact-form.component'
import { TravellerSummaryComponent } from './traveller-summary/traveller-summary.component'
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component'
import { TravellerFormComponent } from './traveller-form/traveller-form.component'
import { NbCardModule, NbButtonModule, NbSelectModule, NbInputModule, NbIconModule, NbTooltipModule } from '@nebular/theme'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [MainTravellerComponent, ContactFormComponent, TravellerSummaryComponent, TermAndConditionComponent, TravellerFormComponent],
  imports: [
    CommonModule,
    TravellerRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbSelectModule,
    NbInputModule,
    FormsModule,
    NbIconModule,
    ReactiveFormsModule,
    NbTooltipModule,
  ],
})
export class TravellerModule {}
