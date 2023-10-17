import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { DomSanitizer } from '@angular/platform-browser';
import { substringAndHighlightClass } from 'src/app/note/util/search.util';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteItemComponent {
  @Input() note: Note;
  @Input() searchTerm: string = '';
  @Input() deleteFn: (note: Note) => void;

  constructor(private sanitizer: DomSanitizer) {
    this.note = new Note();
    this.deleteFn = () => {};
  }

  sanitizeHtml(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  highlightText(text: string, searchTerm: string) {
    const response = substringAndHighlightClass(text, searchTerm);

    return this.sanitizeHtml(response);
  }
}
