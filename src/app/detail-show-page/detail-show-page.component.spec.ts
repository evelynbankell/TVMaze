import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailShowPageComponent } from './detail-show-page.component';

describe('DetailShowPageComponent', () => {
  let component: DetailShowPageComponent;
  let fixture: ComponentFixture<DetailShowPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailShowPageComponent]
    });
    fixture = TestBed.createComponent(DetailShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
