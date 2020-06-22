import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-maintenanceV2',
  templateUrl: './maintenanceV2.component.html',
  styleUrls: ['./maintenanceV2.component.scss']
})

export class MaintenanceV2Component implements OnInit {

	constructor(public translate: TranslateService) { }

	ngOnInit() {
	}

}
