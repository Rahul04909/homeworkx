import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentManagement } from './rent-management';

describe('RentManagement', () => {
  let component: RentManagement;
  let fixture: ComponentFixture<RentManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
