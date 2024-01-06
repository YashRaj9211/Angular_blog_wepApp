import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelPlsComponent } from './hel-pls.component';

describe('HelPlsComponent', () => {
  let component: HelPlsComponent;
  let fixture: ComponentFixture<HelPlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelPlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelPlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
