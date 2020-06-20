import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReqComponent } from './ticket-req.component';

describe('TicketReqComponent', () => {
  let component: TicketReqComponent;
  let fixture: ComponentFixture<TicketReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
