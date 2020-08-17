import { TestBed } from '@angular/core/testing'

import { CalculateCostService } from './calculate-cost.service'

describe('CalculateCostService', () => {
  let service: CalculateCostService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CalculateCostService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
