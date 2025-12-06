import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCommitment } from './our-commitment';

describe('OurCommitment', () => {
  let component: OurCommitment;
  let fixture: ComponentFixture<OurCommitment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCommitment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCommitment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
