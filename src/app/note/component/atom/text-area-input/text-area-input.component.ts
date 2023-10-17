import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-area-input',
  templateUrl: './text-area-input.component.html',
  styleUrls: ['./text-area-input.component.scss']
})
export class TextAreaInputComponent {
  @Input() value: string = '';
  @Input() editFn: Function = () => {};

  onInputChange($event: Event) {
    this.value = ($event.target as HTMLInputElement).value;
  }

  onFocusOut($event: Event) {
    this.value = ($event.target as HTMLInputElement).value;
    this.editFn(this.value);
  }
}
