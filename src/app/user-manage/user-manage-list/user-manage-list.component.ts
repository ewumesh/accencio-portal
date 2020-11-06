import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { User, UserResponse } from './User';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ARequest } from 'request/request';


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
	userManageList = [];

	constructor(private pageTitleService: PageTitleService,
		public coreService: CoreService,
		private router: Router,
		public translate: TranslateService,
		private toastr: ToastrService,
		private request: ARequest,
		private session: ASession) { }

	ngOnInit() {
		this.translate.get('User List').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
		let rq = '';
		if (this.session.role === 'ACCENCIOADMIN')
			rq = 'list';
		
		if (this.session.role === 'CLIENTADMIN')
			rq = ('list-o/' + this.session.oid);
			
		this.request.get('/user/' + rq).subscribe(users => {
			users.Users.forEach(user => {
				this.userManageList.push({
					name: user.Attributes.find(el => el.Name == "given_name").Value,
					company: user.Attributes.find(el => el.Name == "custom:company").Value,
					accountName: user.Username,
					enabled: user.Enabled,
					statusType: user.Enabled ? "online" :"",
					email: user.Attributes.find(el => el.Name == "email").Value,
					status: user.UserStatus,
					accountType: user.Attributes.find(el => el.Name == "custom:g1").Value,
					accountTypeColor: "primary",
					dateCreated: user.UserCreateDate
				})
			});
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
	addNew() {
			this.router.navigate(['/user/add']);
	}


	/**
	  * getAddUserPopupResponse method is used to get a new user dialog response.
	  * if response will be get then add new user into user list.
	  */
	getAddUserPopupResponse(response: any) {
		if (response) {
			let addUser = {
				name: response.name,
				accountName: response.accountName,
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
	onDelete(data, i) {
		var  headers = new  HttpHeaders( {
			//'Authorization':'eyJraWQiOiJrdGNmSm1FV0hMZmtCeU14ZWxPaktiU3d1XC84OWVHY3pia2ZFUGowTk5xbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkNDM2NjAyOC00MmZmLTRhNWQtODEyZi05NTRlNDdiODM0ZDgiLCJjb2duaXRvOmdyb3VwcyI6WyJVU0VSIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9WWmtDcVpFVDYiLCJjb2duaXRvOnVzZXJuYW1lIjoiZGVtbyIsImdpdmVuX25hbWUiOiJkZW1vIiwiY3VzdG9tOmNvbXBhbnkiOiJEZW1vIiwiYXVkIjoiNDhiOW1pNWVlN21rcnNlbjc3aTluaHZhMmUiLCJldmVudF9pZCI6ImQyNzE5MzUxLWUzOWYtNDg5Mi04Mzc5LWFlNDA2ZmIyZDcxOSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTkyOTk0NDMzLCJleHAiOjE1OTI5OTgwMzMsImlhdCI6MTU5Mjk5NDQzMywiY3VzdG9tOmcxIjoiVVNFUiIsImVtYWlsIjoiZGFuaWVsLmRhdmlkQGJpc3NvZnQucm8ifQ.nldVGObPEoUWMNcCsWolFGtvJp5Y8OyTDN3rZhSO4ZfiUuIJaDa3XBzAoyXwqiNZlUJ3NBadf3bUw9cjg5DYebcJycHgD_POwjrXL9gzQMtCi2_SDnxwQhGJV12jLp-9iaPTORbKVQKRp3vu6O0G-Y4bRv4pVcnZW-p6GxvY0rO8JUzhsAaF75aHHtIzewXiBFD-9df5oFNJW2jXO23F8ZDCkWIb3YswuCrBgpPQMRf-vk6B6tHXR6cIko7ihIhtwaMEpjSswlHrOvj-yGSV1F1V1UvaH78DmLNBEe4EXoK0QDOqZBxblyYxoh6Sv3RF-2lXnppt9uQyGdbaVYgmiw'
		}
		);
		//headers = headers.set('Accept', 'application/json');
		//headers = headers.set('Content-Type', 'application/json');
		headers = headers.set('Authorization', this.session.id_token);
		//headers = headers.set('Access-Control-Allow-Origin', '*');

		let accountName = data.accountName;

		
		this.coreService.deleteUserDialog("Are you sure you want to delete this user permanently?").
			then(res => {
				if (res === true) {
				this.request.delete('/user/delete/' + accountName).subscribe(r => {
								this.getDeleteResponse(res, i);
								this.toastr.success('User has been deleted.');
							});
						}
					
			})
			.catch(error => console.log(error))
	}


	onEnabled(data, i) {
		const accountName = data.accountName;
		this.coreService.deleteUserDialog("Are you sure you want to enable this user?").
			then(res => {
				this.request.post('/user/enable/' + accountName, {}).subscribe(r => {
								this.updateIsEnabledResponse(res, i, true);
								this.toastr.success('User has been enabled.');
							});
					
			})
			.catch(error => console.log(error))
	}

	onDisabled(data, i) {
		const accountName = data.accountName;
		this.coreService.deleteUserDialog("Are you sure you want to disable this user?").
			then(res => {
				this.request.post('/user/disable/' + accountName, {}).subscribe(r => {
								this.updateIsEnabledResponse(res, i, false);
								this.toastr.success('User has been disabled.');
							});
					
			})
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

	updateIsEnabledResponse(response, i, isEnabled) {
		if (response === true) {
			this.userManageList[i].enabled = isEnabled;
			this.userManageList[i].statusType = isEnabled ? 'online':'';
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
			this.userManageList[i].accountName = response.accountName,
				this.userManageList[i].name = response.name,
				this.userManageList[i].email = response.email,
				this.userManageList[i].accountType = response.accountType,
				this.userManageList[i].accountTypeColor = this.color[response.accountType]
		}
	}
}
