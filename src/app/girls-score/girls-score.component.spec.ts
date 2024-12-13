import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlsScoreComponent } from './girls-score.component';

describe('GirlsScoreComponent', () => {
  let component: GirlsScoreComponent;
  let fixture: ComponentFixture<GirlsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GirlsScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GirlsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
