import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewCatComponent } from './new-cat.component';

describe('NewCatComponent', () => {
  let component: NewCatComponent;
  let fixture: ComponentFixture<NewCatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
