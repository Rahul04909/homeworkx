import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackersAndMovers } from './packers-and-movers';

describe('PackersAndMovers', () => {
  let component: PackersAndMovers;
  let fixture: ComponentFixture<PackersAndMovers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackersAndMovers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackersAndMovers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
