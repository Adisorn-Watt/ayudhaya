import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-pick-date',
  templateUrl: './pick-date.component.html',
  styleUrls: ['./pick-date.component.scss'],
})
export class PickDateComponent implements OnInit {
  @Output() dateChange = new EventEmitter<{ start: string; end: string }>()

  public selectedStartDate: string = this.minStartDate
  public selectedEndDate: string = this.minReturnDate

  constructor() {}

  ngOnInit(): void {}

  get minStartDate() {
    return this.getFormattedDate(this.addDays(new Date(), 0))
  }

  get maxStartDate() {
    return this.getFormattedDate(this.addDays(new Date(), 179))
  }

  get minReturnDate() {
    const startDate = new Date(this.selectedStartDate)
    return this.getFormattedDate(this.addDays(startDate, 0))
  }

  get maxReturnDate() {
    const startDate = new Date(this.selectedStartDate)
    return this.getFormattedDate(this.addDays(startDate, 179))
  }

  addDays(date: Date, days: number): Date {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
  }

  getFormattedDate(date: Date): string {
    return date.toISOString().split('T')[0]
  }

  onStartDateChange(e: any): void {
    this.selectedEndDate = ''
    this.dateChange.emit({ start: this.selectedStartDate, end: this.selectedEndDate })
  }

  onEndDateChange(e: any): void {
    this.dateChange.emit({ start: this.selectedStartDate, end: this.selectedEndDate })
  }
}
