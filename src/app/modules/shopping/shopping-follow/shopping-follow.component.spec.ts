import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingFollowComponent } from './shopping-follow.component';

describe('ShoppingFollowComponent', () => {
  let component: ShoppingFollowComponent;
  let fixture: ComponentFixture<ShoppingFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
