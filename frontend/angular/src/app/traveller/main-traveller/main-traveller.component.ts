import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TermAndConditionComponent } from '../term-and-condition/term-and-condition.component';
import { TravellerService } from 'src/app/service/traveller/traveller.service';
import { Traveller } from 'src/app/domain/traveller/traveller';
import { Observable } from 'rxjs';
import { CentralStoreService } from 'src/app/service/central-store/central-store.service';
import { Country } from 'src/app/domain/country/country';

@Component({
  selector: 'app-main-traveller',
  templateUrl: './main-traveller.component.html',
  styleUrls: ['./main-traveller.component.scss']
})
export class MainTravellerComponent implements OnInit {

  formFilled = false;
  userInfo: Traveller;
  selectedCountry: Country;
  selectedDate: { start: string, end: string }

  constructor(private dialogService: NbDialogService, public travellerService: TravellerService, public centralStore: CentralStoreService) { }

  ngOnInit(): void {
    this.travellerService.getUserDetail().subscribe(u => {
      this.userInfo = u[0];
    })
    this.selectedCountry = this.centralStore.getSelectedCountry()
    this.selectedDate = this.centralStore.getSelectedDate()
    console.log(this.selectedCountry, this.selectedDate)
  }

  showDialog() {
    this.dialogService.open(TermAndConditionComponent, {
      hasScroll: true, autoFocus: true,
      //  hasBackdrop: true, closeOnBackdropClick: true, closeOnEsc: true
    });
  }

  handleContactForm(e: any) {
  }

  onNext() {
    this.formFilled = true;
  }


}
