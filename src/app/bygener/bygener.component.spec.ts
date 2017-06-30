import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BygenerComponent } from './bygener.component';

describe('BygenerComponent', () => {
  let component: BygenerComponent;
  let fixture: ComponentFixture<BygenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BygenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BygenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
