import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserItemComponent } from './admin-user-item.component';

describe('AdminUserItemComponent', () => {
  let component: AdminUserItemComponent;
  let fixture: ComponentFixture<AdminUserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
