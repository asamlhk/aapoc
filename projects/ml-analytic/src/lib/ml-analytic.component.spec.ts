import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlAnalyticComponent } from './ml-analytic.component';

describe('MlAnalyticComponent', () => {
  let component: MlAnalyticComponent;
  let fixture: ComponentFixture<MlAnalyticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlAnalyticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
