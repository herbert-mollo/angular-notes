import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input() searchFn = (text: string): void => {};
  @Input() reloadFn = (): void => {};
  value: string = '';

  onInputChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.searchFn(this.value);
  }

  clear() {
    this.value = '';
    this.searchFn(this.value);
    this.reloadFn();
  }
}
