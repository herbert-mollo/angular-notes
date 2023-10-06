import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteReadingComponent } from './note-reading.component';

describe('NoteReadingComponent', () => {
  let component: NoteReadingComponent;
  let fixture: ComponentFixture<NoteReadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteReadingComponent]
    });
    fixture = TestBed.createComponent(NoteReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
