import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgInfoContainerComponent } from './img-info-container.component';

describe('ImgInfoContainerComponent', () => {
  let component: ImgInfoContainerComponent;
  let fixture: ComponentFixture<ImgInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
