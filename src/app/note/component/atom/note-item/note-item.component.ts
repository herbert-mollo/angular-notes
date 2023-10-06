import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { DomSanitizer } from '@angular/platform-browser';
import { getSubstringByWord } from 'src/app/note/util/search.util';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css'],
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
    if (searchTerm === '') {
      return text;
    }

    const subText = getSubstringByWord(text, searchTerm);
    const regex = new RegExp(searchTerm, 'gi');
    const response = subText.replace(
      regex, '<span class="highlight">$&</span>'
    );

    return this.sanitizeHtml(response);
  }
}
