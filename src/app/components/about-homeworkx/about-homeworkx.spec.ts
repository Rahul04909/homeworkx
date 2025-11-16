import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomeworkx } from './about-homeworkx';

describe('AboutHomeworkx', () => {
  let component: AboutHomeworkx;
  let fixture: ComponentFixture<AboutHomeworkx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHomeworkx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHomeworkx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
