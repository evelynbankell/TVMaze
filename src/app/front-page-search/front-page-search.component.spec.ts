import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPageSearchComponent } from './front-page-search.component';

describe('FrontPageSearchComponent', () => {
  let component: FrontPageSearchComponent;
  let fixture: ComponentFixture<FrontPageSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontPageSearchComponent]
    });
    fixture = TestBed.createComponent(FrontPageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
