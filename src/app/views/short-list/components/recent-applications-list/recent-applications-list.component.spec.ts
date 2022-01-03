import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentApplicationsListComponent } from './recent-applications-list.component';

describe('RecentApplicationsListComponent', () => {
  let component: RecentApplicationsListComponent;
  let fixture: ComponentFixture<RecentApplicationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentApplicationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentApplicationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
