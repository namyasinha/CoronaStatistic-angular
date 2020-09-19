import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseStatisticComponent } from './state-wise-statistic.component';

describe('StateWiseStatisticComponent', () => {
  let component: StateWiseStatisticComponent;
  let fixture: ComponentFixture<StateWiseStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
