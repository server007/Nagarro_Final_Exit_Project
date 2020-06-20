import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStatComponent } from './ticket-stat.component';

describe('TicketStatComponent', () => {
  let component: TicketStatComponent;
  let fixture: ComponentFixture<TicketStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
