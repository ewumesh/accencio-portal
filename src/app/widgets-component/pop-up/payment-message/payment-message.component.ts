import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-message',
  templateUrl: './payment-message.component.html',
  styleUrls: ['./payment-message.component.scss']
})

export class PaymentMessageComponent implements OnInit {

	@Input() title : any;

	constructor( public activeModal: NgbActiveModal, public router : Router) { }

	ngOnInit() {
	}

	//onClick method is used to close a payment message.
	onClick() {
		this.router.navigate(['/courses/courses']);
		this.activeModal.close();
	}

}
