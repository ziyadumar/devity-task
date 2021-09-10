import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryPipe } from 'src/app/shared/pipes/card-info.pipe';
import { SharedModule } from 'src/app/shared/shared.module';

import { BottomCardComponent } from './bottom-card.component';

describe('BottomCardComponent', () => {
  let component: BottomCardComponent;
  let fixture: ComponentFixture<BottomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BottomCardComponent],
      imports: [SharedModule],
      providers: [SummaryPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCardComponent);
    component = fixture.componentInstance;
    component.detail = {
      id: 1,
      count: '87',
      icon: 'icon-facebook.svg',
      isProgress: true,
      text: 'Page Views',
      percentage: 3
    };
    fixture.detectChanges();
  });

  it('should create & consume pipe', () => {
    expect(component).toBeTruthy();
  });
});
