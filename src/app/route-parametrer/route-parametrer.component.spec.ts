import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParametrerComponent } from './route-parametrer.component';

describe('RouteParametrerComponent', () => {
  let component: RouteParametrerComponent;
  let fixture: ComponentFixture<RouteParametrerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParametrerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParametrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
