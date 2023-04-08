import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDetallComponent } from './shopping-detall.component';

describe('ShoppingDetallComponent', () => {
  let component: ShoppingDetallComponent;
  let fixture: ComponentFixture<ShoppingDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingDetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
