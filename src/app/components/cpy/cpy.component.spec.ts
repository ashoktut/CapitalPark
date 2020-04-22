import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpyComponent } from './cpy.component';

describe('CpyComponent', () => {
  let component: CpyComponent;
  let fixture: ComponentFixture<CpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
