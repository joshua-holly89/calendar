import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekChangerComponent } from './timespan-changer.component';

describe('WeekChangerComponent', () => {
  let component: WeekChangerComponent;
  let fixture: ComponentFixture<WeekChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekChangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
