import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarComponentExampleSnackComponent } from './snack-bar-component-example-snack.component';

describe('SnackBarComponentExampleSnackComponent', () => {
  let component: SnackBarComponentExampleSnackComponent;
  let fixture: ComponentFixture<SnackBarComponentExampleSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarComponentExampleSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponentExampleSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
