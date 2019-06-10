import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Peticiones',  icon:'content_paste', class: '' },
    { path: '/table-list', title: 'Camaras',  icon:'camera_enhance', class: '' },
    { path: '/typography', title: 'Video',  icon:'videocam', class: '' },
    { path: '/icons', title: 'Sonido',  icon:'volume_up', class: '' },
    { path: '/maps', title: 'Iluminacion',  icon:'highlight', class: '' },
    { path: '/notifications', title: 'Tramoya',  icon:'event_seat', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
