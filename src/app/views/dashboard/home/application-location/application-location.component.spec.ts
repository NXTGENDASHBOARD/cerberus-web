import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLocationComponent } from './application-location.component';

describe('ApplicationLocationComponent', () => {
  let component: ApplicationLocationComponent;
  let fixture: ComponentFixture<ApplicationLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
