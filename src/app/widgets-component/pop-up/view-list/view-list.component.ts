import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss']
})
export class ViewListComponent implements OnInit, OnDestroy {

	data : any;

	socialIcons	: any = [
		{
			link : "https://www.facebook.com",
			icon : "fa-facebook",
			socialIconClass : "btn-fb"
		},
		{
			link : "https://www.twitter.com",
			icon : "fa-twitter",
			socialIconClass : "btn-tw"
		},
		{
			link : "https://www.linkedin.com",
			icon : "fa-linkedin",
			socialIconClass : "btn-li"
		},
		{
			link : "https://www.instagram.com",
			icon : "fa-instagram",
			socialIconClass : "btn-ins"
		}
	]

	constructor(public  activeModal : NgbActiveModal) { }

	ngOnInit() {
		var body = document.body;
		body.classList.add("contact-modal"); 
	}

	ngOnDestroy() {
		var body = document.body;
		body.classList.remove("contact-modal");
	}

}
