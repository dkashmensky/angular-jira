import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openCloseLogout', [
      state('open', style({
        top: '80px',
      })),
      state('close', style({
        top: '0px',
      })),
      transition('close => open', [
        animate('300ms')
      ]),
      transition('open => close', [
        animate('300ms')
      ]),
    ])
  ]
})
export class HeaderComponent {
  showLogout = false;
}
