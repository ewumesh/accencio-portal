import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-manage-grid',
  templateUrl: './user-manage-grid.component.html',
  styleUrls: ['./user-manage-grid.component.scss']
})

export class UserManageGridComponent implements OnInit {

	userManageGrid : any [] = [
		{
			userImage : "assets/img/user-1.jpg",
			name : "Robert See",
			location : "Qatar",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-2.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "primary",
			availableIcon : "fa-check"
		},
		{
			userImage : "assets/img/user-2.jpg",
			name : "Ria Brown",
			location : "Durham",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-3.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "danger",
			availableIcon : "fa-times"
		},
		{
			userImage : "assets/img/user-3.jpg",
			name : "Leo Gandolf",
			location : "Durham",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-4.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "primary",
			availableIcon : "fa-check"
		},
		{
			userImage : "assets/img/user-4.jpg",
			name : "Jhonny Rem",
			location : "Durham",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-5.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "danger",
			availableIcon : "fa-times"
		},
		{
			userImage : "assets/img/user-6.jpg",
			name : "Sany Mith",
			location : "Durham",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-8.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "primary",
			availableIcon : "fa-check"
		},
		{
			userImage : "assets/img/user-6.jpg",
			name : "Amanda Noa",
			location : "Durham",
			socialIcons : [
				"fa-facebook",
				"fa-google",
				"fa-twitter",
				"fa-github"
			],
			image : "assets/img/project-9.jpg",
			availableText : "Availabel For Hire,",
			availableColor : "danger",
			availableIcon : "fa-times"
		}
	]

	constructor(private pageTitleService : PageTitleService,
               public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('User Grid List').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
