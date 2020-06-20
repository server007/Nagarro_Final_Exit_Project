import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSubComponent } from './ticket-sub.component';

describe('TicketSubComponent', () => {
  let component: TicketSubComponent;
  let fixture: ComponentFixture<TicketSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
