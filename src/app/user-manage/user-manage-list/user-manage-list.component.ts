import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-user-manage-list',
	templateUrl: './user-manage-list.component.html',
	styleUrls: ['./user-manage-list.component.scss']
})

export class UserManageListComponent implements OnInit {

	checkboxes: any;

	color = {
		"Platinum": "primary",
		"Gold": "success",
		"Silver": "warning"
	}
	user2ManageList: any = [
		{
			image: "assets/img/user-1.jpg",
			firstName: "Joseph",
			lastName: "Pinney",
			newStatus: true,
			email: "JosephAPinney@rhyta.com",
			status: "Active",
			statusType: "online",
			time: "Since 1 Hour",
			accountType: "Platinum",
			accountTypeColor: "primary",
			dateCreated: "27 Oct 2018"
		},
		{
			image: "assets/img/user-2.jpg",
			firstName: "Jane",
			lastName: "Walker",
			newStatus: true,
			email: "JaneDWalker@rhyta.com",
			status: "Inactive",
			statusType: "offline",
			time: "Since 30 min",
			accountType: "Gold",
			accountTypeColor: "success",
			dateCreated: "29 Mar 2018"
		},
		{
			image: "assets/img/user-4.jpg",
			firstName: "Carl",
			lastName: "McClellan",
			email: "CarlCMcClellan@rhyta.com",
			status: "Inactive",
			statusType: "offline",
			time: "Since 45 min",
			accountType: "Platinum",
			accountTypeColor: "primary",
			dateCreated: "11 May 2018"
		},
		{
			image: "assets/img/user-3.jpg",
			firstName: "Gordon",
			lastName: "Schrom",
			email: "GordonESchrom@jourrapide.com",
			status: "Active",
			statusType: "online",
			time: "Since 10 min",
			accountType: "Silver",
			accountTypeColor: "warning",
			dateCreated: "26 Dec 2018"
		},
		{
			image: "assets/img/user-5.jpg",
			firstName: "Bradly",
			lastName: "Tucker",
			email: "BradlyDTucker@rhyta.com",
			status: "Active",
			statusType: "online",
			time: "Since 5 min",
			accountType: "Gold",
			accountTypeColor: "success",
			dateCreated: "04 Dec 2018"
		},
		{
			image: "assets/img/user-6.jpg",
			firstName: "Ruby",
			lastName: "Young",
			email: "RubyJYoung@jourrapide.com",
			status: "Active",
			statusType: "online",
			time: "Since 1 Hour",
			accountType: "Silver",
			accountTypeColor: "warning",
			dateCreated: "16 May 2018"
		},
		{
			image: "assets/img/user-7.jpg",
			firstName: "Allen",
			lastName: "Hall",
			email: "AllenTHall@armyspy.com",
			status: "Inactive",
			statusType: "offline",
			time: "Since 25 min",
			accountType: "Platinum",
			accountTypeColor: "primary",
			dateCreated: "16 May 2018"
		},
		{
			image: "assets/img/user-8.jpg",
			firstName: "Nancy",
			lastName: "Hall",
			email: "NancyRPaz@teleworm.us",
			status: "Active",
			statusType: "online",
			time: "Since 55 min",
			accountType: "Gold",
			accountTypeColor: "success",
			dateCreated: "06 Oct 2018"
		},
		{
			image: "assets/img/user-9.jpg",
			firstName: "Sheryl",
			lastName: "Brown",
			email: "SherylEBrown@rhyta.com",
			status: "Inactive",
			statusType: "offline",
			time: "Since 2 Hour",
			accountType: "Silver",
			accountTypeColor: "warning",
			dateCreated: "08 May 2018"
		},
		{
			image: "assets/img/user-10.jpg",
			firstName: "Lauren",
			lastName: "Hang",
			email: "LaurenCHang@rhyta.com",
			status: "Active",
			statusType: "online",
			time: "Since 3 Hour",
			accountType: "Platinum",
			accountTypeColor: "primary",
			dateCreated: "27 Dec 2018"
		}
	]


	userManageList: any = [
		{
			image: "assets/img/user-1.jpg",
			firstName: "Joseph",
			lastName: "Pinney",
			newStatus: true,
			email: "JosephAPinney@rhyta.com",
			status: "Active",
			statusType: "online",
			time: "Since 1 Hour",
			accountType: "Platinum",
			accountTypeColor: "primary",
			dateCreated: "27 Oct 2018"
		}];


	constructor(private pageTitleService: PageTitleService,
		public coreService: CoreService,
		public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('User Manage List').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

	/**
	  * selectall method is used to Checked/Unchecked all other checkboxes when one master is checked/Unchecked.
	  */
	selectall(source) {
		this.checkboxes = document.getElementsByName('checkboxes');
		for (var i = 0, n = this.checkboxes.length; i < n; i++) {
			this.checkboxes[i].checked = source.target.checked;
		}
	}

	/** 
	  * addNewUserDialog method is used to open a add new user dialog.
	  */
	addNewUserDialog() {
		this.coreService.addNewUserDialog().
			then(res => { this.getAddUserPopupResponse(res) })
			.catch(error => console.log(error));
	}


	/**
	  * getAddUserPopupResponse method is used to get a new user dialog response.
	  * if response will be get then add new user into user list.
	  */
	getAddUserPopupResponse(response: any) {
		if (response) {
			let addUser = {
				image: "assets/img/user-4.jpg",
				firstName: response.firstName,
				lastName: response.lastName,
				email: response.email,
				accountType: response.accountType,
				status: "Active",
				statusType: "online",
				time: "Since 1 hour",
				dateCreated: new Date(),
				accountTypeColor: this.color[response.accountType]
			}
			this.userManageList.push(addUser);
		}
	}

	/** 
	   * onDelete method is used to open a delete dialog.
	   */
	onDelete(i) {
		this.coreService.deleteUserDialog("Are you sure you want to delete this user permanently?").
			then(res => { this.getDeleteResponse(res, i) })
			.catch(error => console.log(error))
	}

	/**
	  * getDeleteResponse method is used to delete a user from the user list.
	  */
	getDeleteResponse(response, i) {
		if (response === true) {
			this.userManageList.splice(i, 1);
		}
	}

	/**
	   * onEdit method is used to open a edit dialog.
	   */
	onEditUserList(data, index) {
		this.coreService.editUserList(data).
			then(res => { this.getEditResponse(res, data, index) })
			.catch(error => console.log(error))
	}

	/**
	   * getEditResponse method is used to edit a user data. 
	   */
	getEditResponse(response: any, data, i) {
		if (response) {
			this.userManageList[i].firstName = response.firstName,
				this.userManageList[i].lastName = response.lastName,
				this.userManageList[i].email = response.email,
				this.userManageList[i].accountType = response.accountType,
				this.userManageList[i].accountTypeColor = this.color[response.accountType]
		}
	}
}
