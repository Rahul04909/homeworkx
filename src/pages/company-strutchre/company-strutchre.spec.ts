import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStrutchre } from './company-strutchre';

describe('CompanyStrutchre', () => {
  let component: CompanyStrutchre;
  let fixture: ComponentFixture<CompanyStrutchre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyStrutchre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStrutchre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
