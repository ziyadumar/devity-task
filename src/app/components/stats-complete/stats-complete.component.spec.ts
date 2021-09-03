import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCompleteComponent } from './stats-complete.component';

describe('StatsCompleteComponent', () => {
  let component: StatsCompleteComponent;
  let fixture: ComponentFixture<StatsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
