import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessedComponent } from './successed.component';

describe('SuccessedComponent', () => {
  let component: SuccessedComponent;
  let fixture: ComponentFixture<SuccessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
