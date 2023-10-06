import { Component, Input, OnChanges } from '@angular/core';
import { HeaderSideSettings } from './header.settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnChanges {
  @Input() settings: HeaderSideSettings;

  constructor() {
    this.settings = {
      rightSide: [],
      leftSide: []
    };
  }

  ngOnChanges() {
  }
}
