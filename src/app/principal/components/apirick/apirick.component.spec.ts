import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirickComponent } from './apirick.component';

describe('ApirickComponent', () => {
  let component: ApirickComponent;
  let fixture: ComponentFixture<ApirickComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApirickComponent]
    });
    fixture = TestBed.createComponent(ApirickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
