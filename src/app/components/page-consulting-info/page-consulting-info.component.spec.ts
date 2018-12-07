import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConsultingInfoComponent } from './page-consulting-info.component';

describe('PageConsultingInfoComponent', () => {
  let component: PageConsultingInfoComponent;
  let fixture: ComponentFixture<PageConsultingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConsultingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConsultingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
