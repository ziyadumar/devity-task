import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDailyComponent } from './stats-daily.component';

describe('StatsDailyComponent', () => {
  let component: StatsDailyComponent;
  let fixture: ComponentFixture<StatsDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
