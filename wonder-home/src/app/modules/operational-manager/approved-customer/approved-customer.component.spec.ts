import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCustomerComponent } from './approved-customer.component';

describe('ApprovedCustomerComponent', () => {
  let component: ApprovedCustomerComponent;
  let fixture: ComponentFixture<ApprovedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprovedCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprovedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
