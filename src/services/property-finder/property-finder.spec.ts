import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyFinder } from './property-finder';

describe('PropertyFinder', () => {
  let component: PropertyFinder;
  let fixture: ComponentFixture<PropertyFinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyFinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyFinder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
