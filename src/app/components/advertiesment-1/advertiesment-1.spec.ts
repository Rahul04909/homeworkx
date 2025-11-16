import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertiesment1 } from './advertiesment-1';

describe('Advertiesment1', () => {
  let component: Advertiesment1;
  let fixture: ComponentFixture<Advertiesment1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advertiesment1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advertiesment1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
