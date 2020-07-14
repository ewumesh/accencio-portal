import { Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation, ElementRef, TemplateRef, ContentChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, Event, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import PerfectScrollbar from 'perfect-scrollbar';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TourService, IStepOption } from 'ngx-tour-ng-bootstrap';
import { filter } from 'rxjs/operators';
import { MenuItems } from '../core/menu/menu-items/menu-items';
import { PageTitleService } from '../core/page-title/page-title.service';
import { AuthService } from '../service/auth/auth.service';
import { CoreService } from '../service/core/core-service.service';
import { ASession } from 'request/session';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { WorkbookPerm } from 'app/core/types/WorkbookPerm';
import { ARequest } from 'request/request';
declare var require;

const screenfull = require('screenfull');

@Component({
	selector: 'accencio-layout',
	templateUrl: './main-material.html',
	styleUrls: ['./main-material.scss'],
	encapsulation: ViewEncapsulation.None
})

export class MainComponent implements OnInit, OnDestroy {
	dark: boolean;
	boxed: boolean;
	collapseSidebar: boolean;
	compactSidebar: boolean;
	customizerIn: boolean = false;


	sidebarClosed: boolean = false;

	sidenavOpen: boolean = true;
	isMobile: boolean = false;
	isFullscreen: boolean = false;
	_opened: boolean = true;
	_showBackdrop: boolean = false;
	_closeOnClickOutside: boolean = false;
	showSettings: boolean = false;
	_mode: string = "push";
	sidenavMode: string = 'side';
	themeSkinColor: any = "light";
	headerSkinColor: any = "primary";
	root: any = 'ltr';
	layout: any = 'ltr';
	header: string;
	url: string;
	public innerWidth: any;
	input: any;
	miniSidebar: boolean = true;
	private _router: Subscription;
	private _mediaSubscription: Subscription;
	private _routerEventsSubscription: Subscription;

	modalRef: BsModalRef;
	currentLang = 'en';
	@ViewChild('sidenav', { static: false }) sidenav;

	@ViewChild('template',  { static: false }) 
	templateSearch: TemplateRef<any>;

	public results = [
	];

	// tslint:disable-next-line:member-ordering
	public tmp: any[] = this.results;

	constructor(
		private request: ARequest,
		private modalService: BsModalService,
		public session: ASession,
		public tourService: TourService,
		private coreService: CoreService,
		private authService: AuthService,
		public menuItems: MenuItems,
		private pageTitleService: PageTitleService,
		public translate: TranslateService,
		private router: Router,
		private route: ActivatedRoute,
		private media: MediaObserver) {

		const browserLang: string = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

		this.tourService.events$.subscribe();
		this.tourService.initialize([
			{
				anchorId: 'start.tour',
				content: 'Welcome to user portal tour!',
				placement: 'below',
				title: 'Welcome to Accencio',
			},
			{
				anchorId: 'tour-search',
				content: 'Enjoying Search box with sugestion and many more things',
				placement: 'below',
				title: 'Search Box',
			},
			{
				anchorId: 'tour-full-screen',
				content: 'By pressing this button you can switch to fullscreen mode.',
				placement: 'below',
				title: 'Full Screen',
			}
		]
		);

		if (window.innerWidth > 1280) {
			this.tourService.start();
		}
	}

	ngOnInit() {
		this.innerWidth = window.innerWidth;
		this.pageTitleService.title.subscribe((val: string) => {
			this.header = val;
		});

		this._router = this.router.events.pipe(
			filter((event: Event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
				this.url = event.url;
			});

		if (this.url != '/session/login' && this.url != '/session/register' && this.url != '/session/forgot-password' && this.url != '/session/lockscreen') {
			const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container');

			/** Perfect scrollbar for sidebar menu **/
			if (window.matchMedia(`(min-width: 1280px)`).matches) {
				const ps = new PerfectScrollbar(elemSidebar, {
					wheelSpeed: 2,
					wheelPropagation: true,
					minScrollbarLength: 20
				});
				ps.update();
			}


		}

		if (this.media.isActive('xs') || this.media.isActive('sm') || this.media.isActive('md')) {
			this._mode = 'over';
			this._closeOnClickOutside = true;
			this._showBackdrop = true;
			this._opened = false;
			this.sidebarClosed = false;
		}

		this._mediaSubscription = this.media.media$.subscribe((change: MediaChange) => {
			let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm') || (change.mqAlias == 'md');

			this.isMobile = isMobile;
			this._mode = (isMobile) ? 'over' : 'push';
			this._closeOnClickOutside = (isMobile) ? true : false;
			this._showBackdrop = (isMobile) ? true : false;
			this._opened = !isMobile;
			this.sidebarClosed = false;
		});

		this._routerEventsSubscription = this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd && this.isMobile) {
				this.sidenav.close();
			}
		});
		let company = this.session.company;
		const allpermService = this.request.get('/permission/byid/' + company);
		allpermService.subscribe(result => {
		   const wbData = (result as WorkbookPerm).w;
		   this.results = wbData.map(el =>  {
			   let el1 = {
			   'id' : el.id,
			   'text' : el.name,
			   'l1' : el.name[0]
				};
			return el1;
		})
		console.log(this.results);
		this.tmp = this.results;
		});
	}
	elSearchFocusIn() {
		this.modalRef = this.modalService.show(
			this.templateSearch,
			Object.assign({}, { class: 'searchmodal my-modal' })
		);
	}
	elSearchFocusOut() {
		this.modalRef.hide();
	}

	ngOnDestroy() {
		this._router.unsubscribe();
		this._mediaSubscription.unsubscribe();
	}

	/**
	  * toggleFullscreen method is used to show a template in fullscreen.
	  */
	toggleFullscreen() {
		if (screenfull.enabled) {
			screenfull.toggle();
			this.isFullscreen = !this.isFullscreen;
		}
	}

	/**
	  * _toggleOpened method is used to toggle a menu list.
	  */
	public _toggleOpened() {
		this._opened = !this._opened;
		this.sidebarClosed = !this.sidebarClosed;
	}

	/**
	  * customizerFunction is used to open and close the customizer.
	  */
	customizerFunction() {
		this.customizerIn = !this.customizerIn;
	}


	/**
	  * changeThemeColor function filter the color for sidebar section.
	  */
	changeThemeColor(color) {
		this.themeSkinColor = color;
	}

	/**
	  * changeHeaderColor function filter the color for header section.
	  */
	changeHeaderColor(color) {
		this.headerSkinColor = color;
	}

	/**
	  * addMenuItem is used to add a new menu into menu list.
	  */
	addMenuItem(): void {
		this.menuItems.add({
			state: 'pages',
			name: 'accencio MENU',
			type: 'sub',
			icon: 'icon-plus icons',
			children: [
				{ state: 'blank', name: 'SUB MENU1' }
			]
		});
	}

	/**
	  * As router outlet will emit an activate event any time a new component is being instantiated.
	  */
	onActivate(e, scrollContainer) {
		scrollContainer.scrollTop = 0;
	}
	//values: string = '';

	onKey(event: any) { // without type info
		console.log(event.target.value);
		var s1 = event.target.value as string;
		s1 = s1.toLowerCase();
		this.results = this.tmp.filter(s => {
			return s.text.toLowerCase().includes(s1);
		});
	}

	dash1(id) {
		this.router.navigate(['/dashboard/' + id]);
		this.modalRef.hide()
	}

	/**
	  * changeRTL method is used to change the layout of template.
	  */
	changeRTL(isChecked) {
		if (isChecked) {
			this.layout = "rtl"
			this.coreService.rtlShowStatus = true;
		} else {
			this.layout = "ltr"
			this.coreService.rtlShowStatus = false;
		}
	}

	/**
	  * toggleSidebar method is used to switch between Icon sidebar and Sidebar.
	  */
	toggleSidebar(isChecked) {
		this.miniSidebar = !isChecked;
		if (isChecked) {
			document.getElementById('showSidebar').classList.remove('icon-sidebar');
			document.getElementsByClassName('app')[0].classList.remove("icon-sidebar-wrap");
			document.getElementById('boxed-layout').classList.remove('disabled-checkbox');
		} else {
			document.getElementById('showSidebar').className += " icon-sidebar";
			document.getElementsByClassName('app')[0].className += " icon-sidebar-wrap";
			document.getElementById('boxed-layout').className += " disabled-checkbox";
		}
	}

	/**
	  * logOut method is used to log out the  template.
	  */
	logOut() {
		this.authService.logOut();
	}

	/**
	  *closeOnClickOutside method is used when click on outside close/open the sidebar.
	  */
	closeOnClickOutside() {
		if (this._opened) {
			this.sidebarClosed = false;
		}
		else {
			this.sidebarClosed = true;
		}
		//return this._closeOnClickOutside;
	}

	/**
	  * boxedLayout method is used to show the box layout.
	  */
	boxedLayout(isChecked) {
		if (isChecked) {
			this.boxed = true;
			document.getElementById('icon-sidebar').className += " disabled-checkbox";
		} else {
			this.boxed = false;
			document.getElementById('icon-sidebar').classList.remove('disabled-checkbox');
		}
	}
}