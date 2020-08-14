import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traveller-form',
  templateUrl: './traveller-form.component.html',
  styleUrls: ['./traveller-form.component.css']
})
export class TravellerFormComponent implements OnInit {
  selectedItem = 'Mr.';
  selectedIdentification = "";

  constructor() { }

  ngOnInit(): void {
  }

}
