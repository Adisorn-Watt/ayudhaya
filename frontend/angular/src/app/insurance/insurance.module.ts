import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbLayoutModule,
  NbButtonModule,
  NbDatepickerModule,
  NbInputModule,
} from '@nebular/theme';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { MainInsuranceComponent } from './main-insurance/main-insurance.component';
import { CountryComponent } from './country/country.component';
import { PackageComponent } from './package/package.component';
import { PickDateComponent } from './pick-date/pick-date.component';
import { InsuranceSummaryComponent } from './insurance-summary/insurance-summary.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainInsuranceComponent,
    CountryComponent,
    PackageComponent,
    PickDateComponent,
    InsuranceSummaryComponent,
  ],
  imports: [
    CommonModule,
    InsuranceRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbDatepickerModule,
    NbInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class InsuranceModule { }
