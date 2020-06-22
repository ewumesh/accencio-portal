import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-profile-v2',
  templateUrl: './user-profile-v2.component.html',
  styleUrls: ['./user-profile-v2.component.scss']
})

export class UserProfileV2Component implements OnInit {

	profileCard : any [] = [
		{
			image : "assets/img/user-5.jpg",
			name : "James Poyner",
			profile : "Freelance Designer",
			workedOn : "Worked at Github",
			wentTo : "Went to Oh, Canada",
			livesIn : "Lives in San Francisco, CA",
			about : "Became friends with Obama",
			socialIcons : [
				"fa-facebook",
				"fa-instagram",
				"fa-linkedin-square",
				"fa-pinterest-p"
			]
		}
	]

	likesCard : any [] = [
		{
			image : "assets/img/user-1.jpg",
			name : "Scott Shealy"
		},
		{
			image : "assets/img/user-2.jpg",
			name : "Matthew Moore"
		},
		{
			image : "assets/img/user-3.jpg",
			name : "Raymond Szeto"
		}
	]

	userProfileDescription_1 : any = [
		{
			image : "assets/img/user-1.jpg",
			name : "Margaret Smelley",
			content :"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			images : [
				"assets/img/project-1.jpg",
				"assets/img/project-2.jpg",
				"assets/img/project-3.jpg",
				"assets/img/project-4.jpg",
				"assets/img/project-5.jpg",
				"assets/img/project-6.jpg"
			],
			childProfileCard : [
				{
					image : "assets/img/user-2.jpg",
					content : "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper."
				},
				{
					image : "assets/img/user-3.jpg",
					content : "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
				}
			]
		}
	]

	userProfileDescription_2 : any = [
		{
			userImage : "assets/img/user-4.jpg",
			name : "Lisa Lovell",
			image : "assets/img/project-7.jpg",
			content :"laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut officia deserunt mollit anim id est laborum. ex ea commod consequate"
		}
	]

	userProfileMiniCard : any = [
		{
			image : "assets/img/user-6.jpg",
			heading : "This is why is so famous",
			content : "Lorem ipsum dolor sit amet, consectetur."
		}
	]

	titleCard : any = [
		{
			image : "assets/img/project-9.jpg",
			heading : "What I Wish Everyone Knew About",
			content : "Enim ad minim veniam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
		}
	]
	
	constructor(private pageTitleService : PageTitleService,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('User Profile V2').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
