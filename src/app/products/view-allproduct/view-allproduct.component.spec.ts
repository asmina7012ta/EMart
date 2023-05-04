import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllproductComponent } from './view-allproduct.component';

describe('ViewAllproductComponent', () => {
  let component: ViewAllproductComponent;
  let fixture: ComponentFixture<ViewAllproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
