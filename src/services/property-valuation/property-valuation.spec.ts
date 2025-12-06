import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyValuation } from './property-valuation';

describe('PropertyValuation', () => {
  let component: PropertyValuation;
  let fixture: ComponentFixture<PropertyValuation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyValuation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyValuation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
