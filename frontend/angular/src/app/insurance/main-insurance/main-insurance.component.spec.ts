import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MainInsuranceComponent } from './main-insurance.component'

describe('MainInsuranceComponent', () => {
  let component: MainInsuranceComponent
  let fixture: ComponentFixture<MainInsuranceComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainInsuranceComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInsuranceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
