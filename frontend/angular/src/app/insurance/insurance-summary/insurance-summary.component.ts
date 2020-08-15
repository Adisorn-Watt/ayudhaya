import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CentralStoreService } from '../../service/central-store/central-store.service'
import { Country } from 'src/app/domain/country/country';
import { Package } from 'src/app/domain/package/package';

@Component({
  selector: 'app-insurance-summary',
  templateUrl: './insurance-summary.component.html',
  styleUrls: ['./insurance-summary.component.scss']
})
export class InsuranceSummaryComponent implements OnInit {

  @Input() selectedCountry: Country;
  @Input() selectedPackage: Package;
  @Input() selectedDate: { start: string, end: string };

  constructor(private centralStore: CentralStoreService, private router: Router) { }

  ngOnInit(): void {
  }

  confirmInsurance() {
    this.router.navigateByUrl('/traveller');
  }

}
