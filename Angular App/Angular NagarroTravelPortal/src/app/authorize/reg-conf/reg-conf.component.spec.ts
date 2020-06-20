import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegConfComponent } from './reg-conf.component';

describe('RegConfComponent', () => {
  let component: RegConfComponent;
  let fixture: ComponentFixture<RegConfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegConfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
