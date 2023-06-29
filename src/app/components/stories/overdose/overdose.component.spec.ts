import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdoseComponent } from './overdose.component';

describe('OverdoseComponent', () => {
  let component: OverdoseComponent;
  let fixture: ComponentFixture<OverdoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverdoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverdoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
