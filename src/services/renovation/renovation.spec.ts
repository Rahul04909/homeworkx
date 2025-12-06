import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renovation } from './renovation';

describe('Renovation', () => {
  let component: Renovation;
  let fixture: ComponentFixture<Renovation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Renovation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Renovation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
