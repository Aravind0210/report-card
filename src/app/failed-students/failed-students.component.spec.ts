import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedStudentsComponent } from './failed-students.component';

describe('FailedStudentsComponent', () => {
  let component: FailedStudentsComponent;
  let fixture: ComponentFixture<FailedStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FailedStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FailedStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
