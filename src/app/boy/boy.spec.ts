import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boy } from './boy';

describe('Boy', () => {
  let component: Boy;
  let fixture: ComponentFixture<Boy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
