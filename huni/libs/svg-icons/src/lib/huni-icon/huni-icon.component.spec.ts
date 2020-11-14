import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuniIconComponent } from './huni-icon.component';

describe('HuniIconComponent', () => {
  let component: HuniIconComponent;
  let fixture: ComponentFixture<HuniIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuniIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuniIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
