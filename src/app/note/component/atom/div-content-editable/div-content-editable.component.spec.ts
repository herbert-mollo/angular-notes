import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivContentEditableComponent } from './div-content-editable.component';

describe('DivContentEditableComponent', () => {
  let component: DivContentEditableComponent;
  let fixture: ComponentFixture<DivContentEditableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivContentEditableComponent]
    });
    fixture = TestBed.createComponent(DivContentEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
