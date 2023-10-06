import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
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
