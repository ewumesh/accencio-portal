import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { Library } from './Library';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ARequest } from 'request/request';

@Component({
	selector: 'app-libraries-manage-list',
	templateUrl: './libraries-manage-list.component.html',
	styleUrls: ['./libraries-manage-list.component.scss']
})

export class ListComponent implements OnInit {

	checkboxes: any;

	color = {
		"Platinum": "primary",
		"Gold": "success",
		"Silver": "warning"
	}
	public isAllowed = false;
	librariesManageList = [];
	constructor(private pageTitleService: PageTitleService,
		public coreService: CoreService,
		public translate: TranslateService,
		private request: ARequest,
		private router: Router,
		private toastr: ToastrService,
		private session: ASession) { }

	ngOnInit() {
		this.translate.get('Dashboards').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
		this.request.get('/library/all/' + this.session.company).subscribe(libraries => {
			(libraries as Library[]).forEach(element => {
				this.librariesManageList = libraries as Library[];

				if (this.session.role === 'USER') {
					this.request.get('/permission/byidname/' + this.session.oid + '/' + this.session.username).subscribe(
						res => {
						   const ids = res.w.map(el => el.id);
						   this.librariesManageList = this.librariesManageList.filter(f => {
							for (let i = 0, len = f.list.length; i < len; i++) {
							  if (ids.includes(f.list[i].id)) {
								  return true;
							  }
							}
							return false;
						 });
						}
					);
				}

			});
			this.isAllowed = this.session.role != 'USER';

		
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
	   * onDelete method is used to open a delete dialog.
	   */
	onDelete(id, index) {

		this.coreService.deleteUserDialog("Are you sure you want to delete this dashboard?").
			then(res => {
				if (res === true) {
					this.request.delete('/library/' + id).subscribe(users => {
						this.toastr.success('Library has been deleted.');
						this.librariesManageList.splice(index, 1);
					});
				}
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

	addNewLibrary() {
		this.router.navigate(['/libraries/add']);
	}
}
