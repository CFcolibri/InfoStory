import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireStoryComponent } from './fire-story.component';

describe('FireStoryComponent', () => {
  let component: FireStoryComponent;
  let fixture: ComponentFixture<FireStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
