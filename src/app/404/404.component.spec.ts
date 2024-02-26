import { ComponentFixture, TestBed } from '@angular/core/testing';

import { notFound } from './404.component';

describe('404Component', () => {
  let component: notFound;
  let fixture: ComponentFixture<notFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [notFound],
    }).compileComponents();

    fixture = TestBed.createComponent(notFound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
