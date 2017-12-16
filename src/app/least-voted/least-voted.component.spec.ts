import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeastVotedComponent } from './least-voted.component';

describe('LeastVotedComponent', () => {
  let component: LeastVotedComponent;
  let fixture: ComponentFixture<LeastVotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeastVotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeastVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
