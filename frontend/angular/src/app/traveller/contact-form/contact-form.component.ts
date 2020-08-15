import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { TravellerService } from 'src/app/service/traveller/traveller.service';
import { Traveller } from 'src/app/domain/traveller/traveller';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() traveller: Traveller;

  travellerForm = this.fb.group({
    mobileNo: [{ value: '', disabled: true }, Validators.required],
    email: [{ value: '', disabled: true }, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.travellerForm.get('email').setValue(this.traveller.email);
    this.travellerForm.get('mobileNo').setValue(this.traveller.mobileNo);
  }

}
