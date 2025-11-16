import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertiesment } from './advertiesment';

describe('Advertiesment', () => {
  let component: Advertiesment;
  let fixture: ComponentFixture<Advertiesment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Advertiesment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advertiesment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
