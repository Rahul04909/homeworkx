import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiLoanCalculator } from './emi-loan-calculator';

describe('EmiLoanCalculator', () => {
  let component: EmiLoanCalculator;
  let fixture: ComponentFixture<EmiLoanCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmiLoanCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiLoanCalculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
