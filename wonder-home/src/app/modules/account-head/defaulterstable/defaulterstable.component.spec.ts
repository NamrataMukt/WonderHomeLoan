import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaulterstableComponent } from './defaulterstable.component';

describe('DefaulterstableComponent', () => {
  let component: DefaulterstableComponent;
  let fixture: ComponentFixture<DefaulterstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefaulterstableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaulterstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
