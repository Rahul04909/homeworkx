import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lease } from './lease';

describe('Lease', () => {
  let component: Lease;
  let fixture: ComponentFixture<Lease>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lease]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lease);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
