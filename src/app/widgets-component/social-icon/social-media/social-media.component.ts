import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

	@Input() socialIcons : any;
	
	constructor() { }

	ngOnInit() {
	}

}
