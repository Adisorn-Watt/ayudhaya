import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Validators, FormBuilder } from '@angular/forms'
import { Traveller } from 'src/app/domain/traveller/traveller'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() traveller: Traveller
  @Output() mobileNumberChange = new EventEmitter<string>()
  @Output() emailChange = new EventEmitter<string>()
  private editable = false

  travellerForm = this.fb.group({
    mobileNo: [{ value: '' }, Validators.required],
    email: [{ value: '' }, Validators.required],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.travellerForm.get('email').setValue('')
    this.travellerForm.get('mobileNo').setValue('')
  }

  toggleEditable(): void {
    if (!this.editable) {
      this.travellerForm.get('email').reset({ value: '', disabled: false })
      this.travellerForm.get('mobileNo').reset({ value: '', disabled: false })
    } else {
      this.travellerForm.get('email').reset({ value: this.traveller.email, disabled: true })
      this.travellerForm.get('mobileNo').reset({ value: this.traveller.mobileNo, disabled: true })
    }

    this.editable = !this.editable
  }


  onChangeMobileNumber(): void {
    this.mobileNumberChange.emit(this.travellerForm.get('mobileNo').value)
  }
  onChangeEmail(): void {
    this.emailChange.emit(this.travellerForm.get('email').value)
  }
}
