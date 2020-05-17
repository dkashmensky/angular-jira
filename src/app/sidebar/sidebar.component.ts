import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  myFilterActive = false;
  dateFilterActive = false;

  toggleMyFilter() {
    this.myFilterActive = !this.myFilterActive;
  }
}
