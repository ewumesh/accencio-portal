import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})

export class UserProfileCardComponent implements OnInit {

	@Input() userProfileCard : any;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
	}

}
