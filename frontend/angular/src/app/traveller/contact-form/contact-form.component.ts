import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  mobileNo: string = '';
  email: string = '';
  formValid: boolean = false;

  @Output() onChangeValue = new EventEmitter<{ formValid: boolean, mobileNo: string, email: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    const mobileNo = this.mobileNo
    const email = this.email
    const formValid = this.formValid
    this.onChangeValue.emit({ formValid, mobileNo, email });
  }

}
