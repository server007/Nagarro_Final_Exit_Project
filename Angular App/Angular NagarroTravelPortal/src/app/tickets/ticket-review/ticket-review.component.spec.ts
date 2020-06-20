import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReviewComponent } from './ticket-review.component';

describe('TicketReviewComponent', () => {
  let component: TicketReviewComponent;
  let fixture: ComponentFixture<TicketReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
