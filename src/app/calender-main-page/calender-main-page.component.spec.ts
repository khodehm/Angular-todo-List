import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderMainPageComponent } from './calender-main-page.component';

describe('CalenderMainPageComponent', () => {
  let component: CalenderMainPageComponent;
  let fixture: ComponentFixture<CalenderMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalenderMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
