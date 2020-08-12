import { Injectable } from '@angular/core';
import { ASession } from 'request/session';

export interface ChildrenItems {
   state: string;
   name: string;
   type?: string;
   label?: string;
}

export interface Menu {
   state: string;
   name: string;
   type: string;
   icon: string;
   label?: string;
   children?: ChildrenItems[];
}

const MENUITEMS_USER = [

   {
      state: 'home',
      name: 'Home',
      type: 'link',
      label: '',
      icon: 'icon-home icons'
   },
   {
      state: 'libraries',
      name: 'Dashboards',
      type: 'link',
      icon: 'icon-share icons'
   },
   {
      state: 'favorites',
      name: 'My Favorites',
      type: 'link',
      icon: 'icon-notebook icons'
   },
   {
      state: 'courses',
      name: 'Learning',
      type: 'link',
      icon: 'icon-book-open icons'
   },
   {
      state: 'video-player',
      name: 'Media',
      type: 'link',
      icon: 'icon-control-play icons',
      label: ''
   }
];



const MENUITEMS_CLIENT_ADMIN = [
   {
      state: 'home',
      name: 'Home',
      type: 'link',
      label: '',
      icon: 'icon-home icons'
   },
   {
      state: 'libraries',
      name: 'Dashboards',
      type: 'link',
      icon: 'icon-speedometer icons'
   },
   {
      state: 'user-management',
      name: 'My Organization',
      type: 'link',
      icon: 'icon-organization icons'
   },
   {
      state: 'favorites',
      name: 'My Favorites',
      type: 'link',
      icon: 'icon-notebook icons'
   },
   // {
   //    state: 'dashboard',
   //    name: 'DASHBOARD',
   //    type: 'sub',
   //    icon: 'icon-speedometer icons',
   //    label: 'New',
   //    children: [
   //       { state: '1', name: 'one' }
   //    ]
   // },
   {
      state: 'perm',
      sub: 'up',
      name: 'Permission',
      type: 'link2',
      icon: 'icon-shield icons'
   },
  
  
   {
      state: 'courses',
      name: 'Learning',
      type: 'link',
      icon: 'icon-book-open icons'
   },
   {
      state: 'video-player',
      name: 'Media',
      type: 'link',
      icon: 'icon-control-play icons',
      label: ''
   }

];

const MENUITEMS_ACCENCIO_ADMIN = [
   {
      state: 'home',
      name: 'Home',
      type: 'link',
      label: '',
      icon: 'icon-home icons'
   },
   {
      state: 'libraries',
      name: 'Dashboards',
      type: 'link',
      icon: 'icon-speedometer icons'
   },
   // {
   //    state: 'dashboard',
   //    name: 'DASHBOARD',
   //    type: 'sub',
   //    icon: 'icon-speedometer icons',
   //    label: 'New',
   //    children: [
   //       { state: '1', name: 'one' },
   //       { state: 'dashboard-v1', name: 'DASHBOARD 1' },
   //       { state: 'dashboard-v2', name: 'DASHBOARD 2' },
   //    ]
   // },
   {
      state: 'org',
      name: 'Organizations',
      type: 'link',
      icon: 'icon-organization icons'
   },
   {
      state: 'user-management',
      name: 'Users',
      type: 'link',
      icon: 'icon-people icons'
   },
   {
      state: 'perm',
      name: 'Permission',
      type: 'link',
      icon: 'icon-shield icons'
   },
   {
      state: 'workbooks',
      name: 'Workbooks',
      type: 'link',
      icon: 'icon-note icons'
   },
   {
      state: 'favorites',
      name: 'My Favorites',
      type: 'link',
      icon: 'icon-notebook icons'
   }
];

@Injectable()
export class MenuItems {
   constructor(private session: ASession) {

   }
   getAll(): Menu[] {
      if (this.session.role === 'CLIENTADMIN') {
         return MENUITEMS_CLIENT_ADMIN;
      }
      if (this.session.role === 'ACCENCIOADMIN') {
         return MENUITEMS_ACCENCIO_ADMIN;
      }
      return MENUITEMS_USER;
   }
}
