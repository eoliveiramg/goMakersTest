import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreVotedComponent } from './more-voted.component';

describe('MoreVotedComponent', () => {
  let component: MoreVotedComponent;
  let fixture: ComponentFixture<MoreVotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreVotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
