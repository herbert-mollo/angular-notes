import { Component, ViewEncapsulation, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent {
  @Input() showSidenav = false;
  @Input() sidenavContainerClass: string = '';
  @Input() sidenavClass: string = '';
  @Input() sidenavContentClass: string = '';
}
