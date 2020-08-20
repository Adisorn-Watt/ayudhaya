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
  @Input() editable: boolean = true
  @Output() mobileNumberChange = new EventEmitter<string>()
  @Output() emailChange = new EventEmitter<string>()
  @Output() formValid = new EventEmitter<boolean>()

  travellerForm = this.fb.group({
    mobileNo: [
      { value: '', disabled: !this.editable },
      [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)],
    ],
    email: [{ value: '', disabled: !this.editable }, [Validators.required, Validators.email]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.travellerForm.get('mobileNo').reset({ value: this.traveller.mobileNo, disabled: !this.editable })
    this.travellerForm.get('email').reset({ value: this.traveller.email, disabled: !this.editable })
  }

  onChangeMobileNumber(): void {
    this.mobileNumberChange.emit(this.travellerForm.get('mobileNo').value)
    this.formValid.emit(this.travellerForm.valid)
  }
  onChangeEmail(): void {
    this.emailChange.emit(this.travellerForm.get('email').value)
    this.formValid.emit(this.travellerForm.valid)
  }

  get email() {
    const email = this.travellerForm.get('email')
    return email.touched ? (email.valid ? 'success' : 'danger') : 'basic'
  }

  get mobile() {
    const mobile = this.travellerForm.get('mobileNo')
    return mobile.touched ? (mobile.valid ? 'success' : 'danger') : 'basic'
  }
}
