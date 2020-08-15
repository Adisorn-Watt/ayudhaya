import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Traveller } from 'src/app/domain/traveller/traveller';

@Component({
  selector: 'app-traveller-form',
  templateUrl: './traveller-form.component.html',
  styleUrls: ['./traveller-form.component.scss']
})
export class TravellerFormComponent implements OnInit {
  @Input() traveller: Traveller;

  travellerForm = this.fb.group({
    title: [{ value: 'Mr.', disabled: true }, Validators.required],
    firstName: [{ value: '', disabled: true }, Validators.required],
    lastName: [{ value: '', disabled: true }, Validators.required],
    beneficiary: [{ value: '', disabled: true }, Validators.required],
    dateOfBirth: [{ value: '', disabled: true }, Validators.required],
    citizenId: [{ value: '', disabled: true }],
    passport: [{ value: '', disabled: true }],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.travellerForm.get('title').setValue(this.traveller.title);
    this.travellerForm.get('firstName').setValue(this.traveller.firstName);
    this.travellerForm.get('lastName').setValue(this.traveller.lastName);
    this.travellerForm.get('citizenId').setValue(this.traveller.citizenId);
    this.travellerForm.get('passport').setValue(this.traveller.passportId);
    this.travellerForm.get('dateOfBirth').setValue(this.traveller.dateOfBirth);
    this.travellerForm.get('beneficiary').setValue(this.traveller.beneficialName);
  }






}
