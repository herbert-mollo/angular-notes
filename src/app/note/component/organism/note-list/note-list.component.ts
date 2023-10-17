import { Component, Input } from '@angular/core';
import { NoteService } from 'src/app/note/service/note.service';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {
  @Input() notes: Note[] = [];
  @Input() searchTerm: string = '';
  @Input() deleteFn: (note: Note) => void;
  @Input() selectFn: (note: Note) => void;

  constructor() {
    this.deleteFn = () => {};
    this.selectFn = () => {};
  }
}
