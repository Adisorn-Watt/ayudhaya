import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentralStoreService } from '../../service/central-store/central-store.service'
import { Country } from 'src/app/domain/country/country';
import { Package } from 'src/app/domain/package/package';

@Component({
  selector: 'app-insurance-summary',
  templateUrl: './insurance-summary.component.html',
  styleUrls: ['./insurance-summary.component.css']
})
export class InsuranceSummaryComponent implements OnInit {

  public selectedCountry: Country;
  public selectedPackage: Package;
  public selectedDate;

  constructor(private centralStore: CentralStoreService, private router: Router) { }

  ngOnInit(): void {
    this.selectedCountry = this.centralStore.getSelectedCountry();
    this.selectedPackage = this.centralStore.getSelectedPackage();
    this.selectedDate = this.centralStore.getSelectedDate();
  }

  confirmInsurance() {
    this.router.navigateByUrl('/traveller');
  }

}
