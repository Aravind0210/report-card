import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestScoreStudentsComponent } from './highest-score-students.component';

describe('HighestScoreStudentsComponent', () => {
  let component: HighestScoreStudentsComponent;
  let fixture: ComponentFixture<HighestScoreStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighestScoreStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighestScoreStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
