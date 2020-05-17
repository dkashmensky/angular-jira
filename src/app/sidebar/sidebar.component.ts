import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('openCloseList', [
      state('open', style({
        transform: 'translateX(0%)',
      })),
      state('close', style({
        transform: 'translateX(-200%)',
      })),
      transition('close => open', [
        animate('300ms'),
      ]),
      transition('open => close', [
        animate('300ms'),
      ])
    ]),
  ]
})
export class SidebarComponent {
  myFilterActive = false;
  dateFilter = '';
  showList = false;

  toggleMyFilter() {
    this.myFilterActive = !this.myFilterActive;
  }

  toggleList() {
    this.showList = !this.showList;
  }
}
