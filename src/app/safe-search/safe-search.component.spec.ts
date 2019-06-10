import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeSearchComponent } from './safe-search.component';

describe('SafeSearchComponent', () => {
  let component: SafeSearchComponent;
  let fixture: ComponentFixture<SafeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
