import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDesigenAndHomeUpgrade } from './interior-desigen-and-home-upgrade';

describe('InteriorDesigenAndHomeUpgrade', () => {
  let component: InteriorDesigenAndHomeUpgrade;
  let fixture: ComponentFixture<InteriorDesigenAndHomeUpgrade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteriorDesigenAndHomeUpgrade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteriorDesigenAndHomeUpgrade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
