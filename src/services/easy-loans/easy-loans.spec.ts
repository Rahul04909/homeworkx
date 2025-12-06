import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyLoans } from './easy-loans';

describe('EasyLoans', () => {
  let component: EasyLoans;
  let fixture: ComponentFixture<EasyLoans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyLoans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyLoans);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
