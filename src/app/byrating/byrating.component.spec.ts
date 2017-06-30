import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByratingComponent } from './byrating.component';

describe('ByratingComponent', () => {
  let component: ByratingComponent;
  let fixture: ComponentFixture<ByratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
