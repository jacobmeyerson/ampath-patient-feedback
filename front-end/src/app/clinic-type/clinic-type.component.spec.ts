import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicTypeComponent } from './clinic-type.component';

describe('ClinicTypeComponent', () => {
  let component: ClinicTypeComponent;
  let fixture: ComponentFixture<ClinicTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
