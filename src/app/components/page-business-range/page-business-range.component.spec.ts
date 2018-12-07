import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBusinessRangeComponent } from './page-business-range.component';

describe('PageBusinessRangeComponent', () => {
  let component: PageBusinessRangeComponent;
  let fixture: ComponentFixture<PageBusinessRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBusinessRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBusinessRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
