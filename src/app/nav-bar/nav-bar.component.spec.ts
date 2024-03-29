import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navBar } from './nav-bar.component';

describe('navBar', () => {
  let component: navBar;
  let fixture: ComponentFixture<navBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navBar],
    }).compileComponents();

    fixture = TestBed.createComponent(navBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
