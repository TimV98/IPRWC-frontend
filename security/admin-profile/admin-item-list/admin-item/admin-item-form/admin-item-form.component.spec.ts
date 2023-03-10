import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemFormComponent } from './admin-item-form.component';

describe('AdminEditItemComponent', () => {
  let component: AdminItemFormComponent;
  let fixture: ComponentFixture<AdminItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminItemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
