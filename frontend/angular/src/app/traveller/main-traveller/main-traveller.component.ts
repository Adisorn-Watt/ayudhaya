import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TermAndConditionComponent } from '../term-and-condition/term-and-condition.component';

@Component({
  selector: 'app-main-traveller',
  templateUrl: './main-traveller.component.html',
  styleUrls: ['./main-traveller.component.css']
})
export class MainTravellerComponent implements OnInit {

  formFilled = false;

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.dialogService.open(TermAndConditionComponent, { hasScroll: true, autoFocus: true, hasBackdrop: true });
  }

  handleContactForm(e: any) {
    console.log(console.log(e))
  }

}
