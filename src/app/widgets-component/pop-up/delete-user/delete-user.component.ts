import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
	
	titleMessage : any;

	constructor(public  activeModal : NgbActiveModal) { }

	ngOnInit() {
		var body = document.body;
		body.classList.add("contact-modal"); 
	}

	ngOnDestroy() {
		var body = document.body;
		body.classList.remove("contact-modal");
	}
}
