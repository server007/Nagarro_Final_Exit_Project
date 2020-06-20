import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketConfComponent } from './ticket-conf.component';

describe('TicketConfComponent', () => {
  let component: TicketConfComponent;
  let fixture: ComponentFixture<TicketConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
