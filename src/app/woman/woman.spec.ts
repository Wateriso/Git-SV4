import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Woman } from './woman';

describe('Woman', () => {
  let component: Woman;
  let fixture: ComponentFixture<Woman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Woman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Woman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
