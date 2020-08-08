import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ARequest } from 'request/request';
import * as i18nIsoCountries from 'i18n-iso-countries';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
	selector: 'ms-organization-addedit',
	templateUrl: './add-component.html',
	styleUrls: ['./add-component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AddOrgComponent implements OnInit {
	public form: FormGroup;
	public config: AngularEditorConfig;
	public title = "Add new";
	public description: string;
	private id: string;
	public countries: any;
	constructor(private fb: FormBuilder,
		private pageTitleService: PageTitleService,
		public translate: TranslateService,
		private router: Router,
		private toastr: ToastrService,
		private route: ActivatedRoute,
		private request: ARequest,
		private session: ASession) { }

	ngOnInit() {
		i18nIsoCountries.registerLocale(require("i18n-iso-countries/langs/en.json"));
		this.countries = i18nIsoCountries.getNames("en");
		this.translate.get('Organization').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});

		this.form = this.fb.group({
			name: [null, Validators.compose([Validators.required])],
			address1: [null, Validators.compose([Validators.required])],
			address2: [null],
			city: [null],
			state: [null],
			zip: [null],
			info: [null],
			id: [null],
			country: ['US']
		});

		this.route.params.subscribe(params => {
			this.id = params['id'];
		});

		if (this.id) {
			this.title = "Edit Company " + this.id;
			this.request.get('/org/byid/' + this.id).subscribe(
				res => {
					//res['country'] = 'US';
					this.form.setValue(res);
					
				}
			)
		}
	}

	onSubmit() {
		console.log(this.form.value.id);
		if (!this.form.value.id)
			this.add();
		else
			this.edit();
	}
	add() {
		this.request.post('/org/add',
			{
				id: '_' + Math.random().toString(36).substr(2, 9),
				name: this.form.value.name,
				address1: this.form.value.address1,
				address2: this.form.value.address2,
				city: this.form.value.city,
				state: this.form.value.state,
				zip: this.form.value.zip,
				info: this.form.value.info,
				country: this.form.value.country
			}).subscribe(res => {
				this.toastr.success('Organization has been added.');
				this.router.navigate(['/org/list'])
			});
	}

	edit() {
		this.request.post('/org/update',
			{
				id: this.form.value.id,
				name: this.form.value.name,
				address1: this.form.value.address1,
				address2: this.form.value.address2,
				city: this.form.value.city,
				state: this.form.value.state,
				zip: this.form.value.zip,
				info: this.form.value.info,
				country: this.form.value.country
			}).subscribe(res => {
				this.toastr.success('Organization has been updated.');
				this.router.navigate(['/org/list'])
			});
	}
}



