import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-degree-details',
  templateUrl: './degree-details.component.html',
  styleUrls: ['./degree-details.component.scss']
})
export class DegreeDetailsComponent implements OnInit, OnDestroy {

	constructor(public activeModal: NgbActiveModal) { }

	ngOnInit() {	
		var body = document.body;
		body.classList.add("degree-popup");
	}

	ngOnDestroy(){
		var body = document.body;
		body.classList.remove("degree-popup");
	}

}
