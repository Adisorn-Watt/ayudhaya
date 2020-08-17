import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MaintransactionComponent } from './maintransaction.component'

describe('MaintransactionComponent', () => {
  let component: MaintransactionComponent
  let fixture: ComponentFixture<MaintransactionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaintransactionComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintransactionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
