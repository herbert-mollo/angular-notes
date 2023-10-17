import { Component, Input } from '@angular/core';
import { addHighlightClass, getSubstringByWord } from 'src/app/note/util/search.util';

@Component({
  selector: 'app-div-content-editable',
  templateUrl: './div-content-editable.component.html',
  styleUrls: ['./div-content-editable.component.scss']
})
export class DivContentEditableComponent {
  @Input() value: string = '';
  @Input() editFn: Function = () => {};
  @Input() searchTerm: string = '';

  onInputChange($event: Event) {
    this.value = ($event.target as HTMLInputElement).innerText;
  }

  onFocusOut($event: Event) {
    this.value = ($event.target as HTMLInputElement).innerText;
    this.editFn(this.value);
  }

  highlightText(text: string, searchTerm: string) {
    return addHighlightClass(text, searchTerm);
  }
}
