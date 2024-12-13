import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysScoreComponent } from './boys-score.component';

describe('BoysScoreComponent', () => {
  let component: BoysScoreComponent;
  let fixture: ComponentFixture<BoysScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoysScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoysScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
