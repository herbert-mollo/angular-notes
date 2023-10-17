import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { NoteService } from 'src/app/note/service/note.service';
import { Note } from 'src/app/shared/models/note';
import { headerContentSettings, headerSidenavSettings } from './note-reading.settings';
import { HeaderSideSettings } from '../../molecule/header/header.settings';
import { filterByString, findAndReplace } from 'src/app/note/util/search.util';
import { v4 as uuidv4 } from 'uuid';
import { ThemeService } from 'src/app/src/app/shared/theme/theme.service';

@Component({
  selector: 'app-note-reading',
  templateUrl: './note-reading.component.html',
  styleUrls: ['./note-reading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteReadingComponent implements OnInit {
  notes: Note[] = [];
  searchTerm: string = '';
  filteredNotes: Note[] = [];
  selectedNote: Note = new Note();
  showSidenav = true;
  headerSidenavSettings: HeaderSideSettings;
  headerContentSettings: HeaderSideSettings;

  constructor(
    private noteService: NoteService,
    private themeService: ThemeService
  ) {
    this.headerSidenavSettings = headerSidenavSettings({add: this.add});
    this.headerContentSettings = headerContentSettings({
      toggleSidenav: this.toggleSidenav,
      toggleDarkTheme: this.toggleDarkTheme
    });
  }

  ngOnInit(): void {
    this.reload();
  }

  reload = () => {
    this.getAll();
  }

  getAll() {
    this.noteService.getAll().subscribe({
      next: notes => {
        this.notes = notes;
        this.filteredNotes = this.notes;
      },
      error: e => console.log("Error get all:"+e),
    });
  }

  select = (note: Note) => {
    this.selectedNote = note;
  }

  add = (note: Note) => {
    note.id = uuidv4();
    this.noteService.add(note).subscribe({
      next: () => {
        this.ngOnInit(),
        this.selectedNote = note;
      },
      error: e => console.log("add error:"+e),
    });
  }

  edit = (note: Note) => {
    this.noteService.edit(note).subscribe({
      next: (note) => {
        this.selectedNote = note;
        findAndReplace(note, this.notes);
      },
      error: e => console.log({ "edit error": e }),
    });
  }

  delete = (note: Note) => {
    this.noteService.delete(note).subscribe({
      next: () => {
        this.reload();
        this.selectedNote = new Note();
      },
      error: e => console.log({ "delete error": e }),
    });
  }

  toggleSidenav = () => {
    this.showSidenav = !this.showSidenav;
  }

  toggleDarkTheme = () => {
    this.themeService.toggleDarkTheme();
  }

  search = (text: string) => {
    this.searchTerm = text;
    this.filteredNotes = filterByString(this.notes, text);
  }
}
