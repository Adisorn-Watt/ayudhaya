import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CalculateCostService {
  constructor() {}

  getDaysDifferent(startDate, finishDate): number {
    // Calculate time difference of 2 dates
    const daysDifferent = this.calculateDaysDifferent(startDate, finishDate)
    return daysDifferent
  }

  calculateDaysDifferent(startDate, finishDate): number {
    const msecStartDate = Date.parse(startDate)
    const msecFinishDate = Date.parse(finishDate)

    const timeDifferent = msecFinishDate - msecStartDate
    const daysDifferent = timeDifferent / (1000 * 3600 * 24) + 1 // millisec*minutes*hours

    return daysDifferent
  }

  getInsuranceCost(startDate, finishDate): number {
    const daysDifferent = this.calculateDaysDifferent(startDate, finishDate)
    const insuranceCost = this.calculateInsuranceCost(daysDifferent)
    return insuranceCost
  }

  calculateInsuranceCost(daysDifferent): number {
    // check เบี้ยประกัน คิดจากจำนวนวันเดินทาง
    let cost

    if (daysDifferent >= 1 && daysDifferent <= 4) {
      cost = 235
    }

    if (daysDifferent >= 5 && daysDifferent <= 6) {
      cost = 357
    }

    if (daysDifferent >= 7 && daysDifferent <= 8) {
      cost = 400
    }

    if (daysDifferent >= 9 && daysDifferent <= 10) {
      cost = 445
    }

    if (daysDifferent >= 11 && daysDifferent <= 14) {
      cost = 544
    }

    if (daysDifferent >= 15 && daysDifferent <= 21) {
      cost = 664
    }

    if (daysDifferent >= 22 && daysDifferent <= 31) {
      cost = 837
    }

    if (daysDifferent >= 32 && daysDifferent <= 60) {
      cost = 1107
    }

    if (daysDifferent >= 61 && daysDifferent <= 90) {
      cost = 1428
    }

    if (daysDifferent >= 91 && daysDifferent <= 180) {
      cost = 1953
    }

    if (daysDifferent >= 181) {
      cost = 2468
    }
    return cost
  }
}
