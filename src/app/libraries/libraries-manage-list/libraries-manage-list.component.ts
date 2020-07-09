import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { Library, LibraryResponse } from './Library';
import {UserResponse} from "../../user-manage/user-manage-list/User";
import {Workbook} from "../../dashboard-widgets/dash/workbook";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-libraries-manage-list',
	templateUrl: './libraries-manage-list.component.html',
	styleUrls: ['./libraries-manage-list.component.scss']
})

export class LibrariesManageListComponent implements OnInit {

	checkboxes: any;

	color = {
		"Platinum": "primary",
		"Gold": "success",
		"Silver": "warning"
	}

	librariesManageList = [];
	userManage3List: any = [
		{
			image: "assets/img/user-1.jpg",
			name: "Joseph",
			accountName: "Pinney",
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
		public translate: TranslateService,
		private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
		private session: ASession) { }

	ngOnInit() {
		this.translate.get('Libraries Manage List').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
    //console.log("Hey: " + this.http.get<LibraryResponse>(environment.API_GATEWAY + '/library/all').pipe());

		this.http.get(environment.API_GATEWAY + '/library/all').subscribe(libraries => {
      (libraries as Library[]).forEach(element => {
				this.librariesManageList.push({
          id: element.id,
          name: element.name,
          date: element.date,
          description: element.description,
          workbook: element.workbook
          /*
					image: "assets/img/user-1.jpg",
					name: user.Attributes.find(el => el.Name == "given_name").Value,
					accountName: user.Username,
					newStatus: false,
					email: user.Attributes.find(el => el.Name == "email").Value,
					status: user.UserStatus,
					statusType: "online",
					time: "Since 1 Hour",
					accountType: user.Attributes.find(el => el.Name == "custom:g1").Value,
					accountTypeColor: "primary",
					dateCreated: "27 Oct 2018"*/
				})
			});
		});



    /* this.http.get<UserResponse>(environment.API_GATEWAY + '/user/list').subscribe(users => {
      users.Users.forEach(user => {
        this.userManageList.push({
          image: "assets/img/user-1.jpg",
          name: user.Attributes.find(el => el.Name == "given_name").Value,
          accountName: user.Username,
          newStatus: false,
          email: user.Attributes.find(el => el.Name == "email").Value,
          status: user.UserStatus,
          statusType: "online",
          time: "Since 1 Hour",
          accountType: user.Attributes.find(el => el.Name == "custom:g1").Value,
          accountTypeColor: "primary",
          dateCreated: "27 Oct 2018"
        })
      }); */



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
			this.librariesManageList.push(addUser);
		}
	}

	/**
	   * onDelete method is used to open a delete dialog.
	   */
  onDelete(id, index) {
    this.http.delete(environment.API_GATEWAY + '/library/' + id).subscribe(users => {
      this.toastr.success('Library has been deleted.');
      this.librariesManageList.splice(index, 1);
    });
  }

	/**
	  * getDeleteResponse method is used to delete a user from the user list.
	  */
	getDeleteResponse(response, i) {
		if (response === true) {
			this.librariesManageList.splice(i, 1);
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
			this.librariesManageList[i].accountName = response.accountName,
				this.librariesManageList[i].name = response.name,
				this.librariesManageList[i].email = response.email,
				this.librariesManageList[i].accountType = response.accountType,
				this.librariesManageList[i].accountTypeColor = this.color[response.accountType]
		}
	}

  addNewLibrary(){
	  this.router.navigate(['/libraries/add']);
  }
}
