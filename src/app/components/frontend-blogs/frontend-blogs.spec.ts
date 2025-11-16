import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendBlogs } from './frontend-blogs';

describe('FrontendBlogs', () => {
  let component: FrontendBlogs;
  let fixture: ComponentFixture<FrontendBlogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendBlogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendBlogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
