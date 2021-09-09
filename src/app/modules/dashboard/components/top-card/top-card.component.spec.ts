import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { TopCardComponent } from './top-card.component';

describe('TopCardComponent', () => {
  let component: TopCardComponent;
  let fixture: ComponentFixture<TopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopCardComponent],
      imports: [MatIconModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCardComponent);
    component = fixture.componentInstance;
    component.card = {
      platform: 'facebook',
      count: '1987',
      isProgress: true,
      icon: 'icon-facebook.svg',
      percentage: 12,
      username: '@nathanf'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
