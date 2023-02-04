import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPannelEventComponent } from './admin-pannel-event.component';

describe('AdminPannelEventComponent', () => {
  let component: AdminPannelEventComponent;
  let fixture: ComponentFixture<AdminPannelEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPannelEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPannelEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
