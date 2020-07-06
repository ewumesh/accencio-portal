import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  label?:string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  label?:string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
   // {
   //    state: 'horizontal',
   //    name: 'TOP MENU',
   //    type: 'link',
   //    icon: 'icon-calendar icons'
   // },
     {
      state: 'dash-widget',
      name: 'Dashboard',
      type: 'link',
      label: '',
      icon: 'icon-speedometer icons'
   },
   {
      state: 'chat',
      name: 'CHAT',
      type: 'link',
      label: 'new',
      icon: 'icon-bubbles icons'
   },
   {
      state: 'user-management',
      name: 'MANAGEMENT',
      type: 'link',
      icon: 'icon-organization icons'
   },
  {
    state: 'courses',
    name: 'Learning',
    type: 'link',
    icon: 'icon-book-open icons'
  },
   // {
   //    state: 'courses',
   //    name: 'COURSES',
   //    icon: 'icon-graduation icons',
   //    label: 'New',
   //    type: 'sub',
   //    children: [
   //       { state: 'courses', name: 'COURSES' },
   //       { state: 'course-detail', name: 'COURSE DETAIL' },
   //       { state: 'course-signin', name: 'SIGN IN' },
   //       { state: 'course-payment', name: 'PAYMENT' }
   //    ]
   // },
   // {
   //    state: 'user-management',
   //    name: 'MANAGEMENT',
   //    type: 'sub',
   //    icon: 'icon-organization icons',
   //    label: 'New',
   //    children: [
   //       { state: 'management-list', name: 'USER LIST' },
   //       { state: 'management-grid-list', name: 'USER GRID' }
   //    ]
   // },
   {
      state: 'video-player',
      name: 'Media',
      type: 'link',
      icon: 'icon-control-play icons',
      label: ''
   },
  {
    state: 'libraries',
    name: 'Libraries',
    type: 'link',
    icon: 'icon-equalizer icons',
    label: ''
  },
   // {
   //    state: 'taskboard',
   //    name: 'TASK BOARD',
   //    type: 'link',
   //    icon: 'icon-equalizer icons',
   //    label: 'New'
   // },
   // {
   //    state: 'user-pages',
   //    name: 'USER PAGES',
   //    type: 'sub',
   //    icon: 'icon-people icons',
   //    label: 'New',
   //    children: [
   //       { state: 'user-list', name: 'USER LIST' },
   //       { state: 'user-table', name: 'USER TABLE' },
   //       { state: 'user-profile', name: 'USER PROFILE' },
   //       { state: 'user-profileV2', name: 'USER PROFILE V2', label: 'New' },
   //       { state: 'user-contact', name: 'USER CONTACT' }
   //    ]
   // },
   // {
   //    state: 'pages',
   //    name: 'PAGES',
   //    type: 'sub',
   //    icon: 'icon-book-open icons',
   //    label: 'New',
   //    children: [
   //       { state: 'testimonials', name: 'TESTIMONIALS' },
   //       { state: 'timeline', name: 'TIMELINE' },
   //       { state: 'pricing', name: 'PRICING' },
   //       { state: 'pricingV2', name: 'PRICING V2', label: 'New' },
   //       { state: 'contact-list', name: 'CONTACT LIST', label: 'New' },
   //       { state: 'feedback', name: 'FEEDBACK', label: 'New' },
   //       { state: 'faq', name: 'FAQ', label: 'New' },
   //       { state: 'about', name: 'ABOUT', label: 'New' },
   //       { state: 'search', name: 'SEARCH', label: 'New' },
   //       { state: 'blank', name: 'BLANK' }
   //    ]
   // },
   // {
   //    state: 'session',
   //    name: 'SESSIONS',
   //    type: 'sub',
   //    icon: 'icon-login icons',
   //    label: 'New',
   //    children: [
   //    {state: 'loginone', name: 'LOGIN'},
   //    {state: 'register', name: 'REGISTER'},
   //    {state: 'forgot-password', name: 'FORGOT'},
   //    {state: 'coming-soon', name: 'COMING SOON'},
   //    {state: 'coming-soonV2', name: 'COMING SOON V2', label : 'New'},
   //    {state: 'undermaintance', name: 'UNDER MAINTENANCE'},
   //    {state: 'maintanceV2', name: 'MAINTENANCE V2', label : 'New'},
   //    {state: 'lockscreen', name: 'LOCKSCREEN'},
   //    {state: 'subscribes', name: 'SUBSCRIBES'},
   //    {state: 'not-found', name: '404'},
   //    ]
   // },
   // {
   //    state: 'gallery',
   //    name: 'GALLERY',
   //    type: 'sub',
   //    icon: 'icon-picture icons',
   //    label: 'New',
   //    children: [
   //       { state: 'galleryV1', name: 'GALLERY V1' },
   //       { state: 'galleryV2', name: 'GALLERY V2' },
   //       { state: 'galleryV3', name: 'GALLERY V3' },
   //       { state: 'galleryV4', name: 'GALLERY V4', label: 'New' },
   //    ]
   // },
   // {
   //    state: 'ecommerce',
   //    name: 'ECOMMERCE',
   //    type: 'sub',
   //    icon: 'icon-handbag icons',
   //    label: 'New',
   //    children: [
   //       { state: 'ecommerce-product', name: 'PRODUCT' },
   //       { state: 'ecommerce-product-detail', name: 'PRODUCT DETAIL' },
   //       { state: 'ecommerce-product-list', name: 'PRODUCT LIST' },
   //       { state: 'ecommerce-product-cart', name: 'PRODUCT CART' },
   //       { state: 'ecommerce-order', name: 'ORDER' },
   //       { state: 'ecommerce-order-detail', name: 'ORDER DETAIL' },
   //       { state: 'invoice', name: 'INVOICE' },
   //       { state: 'invoiceV2', name: 'INVOICE LIST', label: 'New' },
   //    ]
   // },
   // {
   //    state: 'dash-widget',
   //    name: 'WIDGETS',
   //    type: 'link',
   //    label: 'New',
   //    icon: 'icon-game-controller icons'
   // },
   // {
   //    state: 'inbox',
   //    name: 'INBOX',
   //    type: 'link',
   //    icon: 'icon-envelope-letter icons'
   // },
   // {
   //    state: 'chat',
   //    name: 'CHAT',
   //    type: 'link',
   //    icon: 'icon-bubbles icons'
   // },
   // {
   //    state: 'calendar',
   //    name: 'CALENDAR',
   //    type: 'link',
   //    icon: 'icon-calendar icons'
   // },
   // {
   //    state: 'ui-elements',
   //    name: 'UI-ELEMENTS',
   //    type: 'sub',
   //    icon: 'icon-equalizer icons',
   //    children: [
   //       { state: 'buttons', name: 'BUTTONS' },
   //       { state: 'progressbar', name: 'PROGRESS BAR' },
   //       { state: 'tabs', name: 'TABS' },
   //       { state: 'accordions', name: 'ACCORDIONS' },
   //       { state: 'pagination', name: 'PAGINATION' },
   //       { state: 'tooltip', name: 'TOOLTIP' },
   //       { state: 'badges', name: 'BADGES' },
   //       { state: 'cards', name: 'CARDS' },
   //       { state: 'social-icons', name: 'SOCIAL ICONS' },
   //       { state: 'typography', name: 'TYPOGRAPHY' },
   //       { state: 'dropdown', name: 'DROPDOWN' },
   //       { state: 'alert', name: 'ALERT' },
   //       { state: 'carousel', name: 'CAROUSEL' },
   //       { state: 'datepicker', name: 'DATEPICKER' },
   //    ]
   // },
   // {
   //    state: 'components',
   //    name: 'COMPONENTS',
   //    type: 'sub',
   //    icon: 'icon-layers icons',
   //    children: [
   //       { state: 'list', name: 'LIST' },
   //       { state: 'grids', name: 'GRIDS' },
   //    ]
   // },
   // {
   //    state: 'icons',
   //    name: 'ICONS',
   //    type: 'sub',
   //    icon: 'icon-flag icons',
   //    children: [
   //       { state: 'glyphicons', name: 'GLYPHICONS' },
   //       { state: 'fontawesome', name: 'FONTAWESOME' },
   //       { state: 'material-icons', name: 'MATERIAL ICONS' },
   //       { state: 'linea', name: 'LINEA' },
   //       { state: 'simple-line-icons', name: 'SIMPLE LINE ICONS' },
   //    ]
   // },
   // {
   //    state: 'forms',
   //    name: 'FORMS',
   //    type: 'sub',
   //    icon: 'icon-doc icons',
   //    children: [
   //       { state: 'form-wizard', name: 'FORM WIZARD' },
   //       { state: 'form-elements', name: 'FORM ELEMENTS' },
   //       { state: 'form-group', name: 'FORM GROUP' },
   //       { state: 'form-validation', name: 'FORM VALIDATION' },
   //       { state: 'form-upload', name: 'UPLOAD' },
   //       { state: 'form-tree', name: 'TREE' }
   //    ]
   // },
   // {
   //    state: 'tables',
   //    name: 'TABLES',
   //    type: 'sub',
   //    icon: 'icon-grid icons',
   //    children: [
   //       { state: 'basic', name: 'Basic' },
   //       { state: 'fullscreen', name: 'FULLSCREEN' },
   //       { state: 'selection', name: 'SELECTION' },
   //       { state: 'pinning', name: 'PINNING' },
   //       { state: 'sorting', name: 'SORTING' },
   //       { state: 'paging', name: 'PAGING' },
   //       { state: 'editing', name: 'EDITING' },
   //       { state: 'filter', name: 'FILTER' },
   //       { state: 'responsive', name: 'Responsive' },
   //       { state: 'foo', name: 'FOO' },
   //    ]
   // },
   // {
   //    state: 'editor',
   //    name: 'EDITOR',
   //    type: 'sub',
   //    icon: 'icon-note icons',
   //    children: [
   //       { state: 'ace-editor', name: 'ACE EDITOR' },
   //       { state: 'summer-editor', name: 'SUMMER EDITOR' },
   //       { state: 'wysiwyg', name: 'WYSIWYG EDITOR' },
   //       { state: 'ckeditor', name: 'CKEDITOR' },
   //    ]
   // },
   // {
   //    state: 'chart',
   //    name: 'CHARTS',
   //    type: 'sub',
   //    icon: 'icon-chart icons',
   //    children: [
   //       { state: 'ng2-charts', name: 'NG2 CHARTS' },
   //       { state: 'ngx-charts', name: 'NGX CHARTS' },
   //       { state: 'easy-pie-chart', name: 'EASY PIE' },
   //       { state: 'google-chart', name: 'GOOGLE CHARTS' },
   //    ]
   // },
   // {
   //    state: 'dragndrop',
   //    name: 'DRAG & DROP',
   //    type: 'sub',
   //    icon: 'icon-share-alt icons',
   //    children: [
   //       { state: 'dragula', name: 'DRAGULA' },
   //       { state: 'sortable', name: 'SORTABLEJS' }
   //    ]
   // },
   // {
   //    state: 'resizable',
   //    name: 'RESIZABLE',
   //    type: 'link',
   //    icon: 'icon-cursor-move icons'
   // },
   // {
   //    state: 'ngx-toaster',
   //    name: 'NGX TOASTER',
   //    type: 'link',
   //    icon: 'icon-menu icons'
   // },
   // {
   //    state: 'animation',
   //    name: 'ANIMATION',
   //    type: 'link',
   //    icon: 'icon-refresh icons fa-spin'
   // },
   // {
   //    state: 'maps',
   //    name: 'MAPS',
   //    type: 'sub',
   //    icon: 'icon-map icons',
   //    children: [
   //       { state: 'googlemap', name: 'GOOGLE MAP' },
   //       { state: 'vectormap', name: 'VECTOR MAP' },
   //       { state: 'leafletmap', name: 'LEAFLET MAP' }
   //    ]
   // },
   // {
   //    state: 'blog',
   //    name: 'BLOG',
   //    type: 'sub',
   //    icon: 'icon-notebook icons',
   //    children: [
   //       { state: 'blog-listing', name: 'BLOG LISTING' },
   //       { state: 'blog-grid', name: 'BLOG GRID' },
   //       { state: 'blog-masonry', name: 'BLOG MASONRY' },
   //       { state: 'blog-detail', name: 'BLOG DETAIL' },
   //       { state: 'blog-edit', name: 'BLOG EDIT' },
   //    ]
   // }

];

@Injectable()
export class MenuItems {
   getAll(): Menu[] {
      return MENUITEMS;
   }
   add(menu: any) {
      MENUITEMS.push(menu);
   }
}
