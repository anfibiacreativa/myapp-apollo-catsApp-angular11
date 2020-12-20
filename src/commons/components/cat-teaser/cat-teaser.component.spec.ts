import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatTeaserComponent } from './cat-teaser.component';

describe('CatTeaserComponent', () => {
  let component: CatTeaserComponent;
  let fixture: ComponentFixture<CatTeaserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
