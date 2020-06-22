import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})

export class AddCommentComponent implements OnInit, OnDestroy {

	addNewComment       : FormGroup;
	commentLikes 		  : number = 2;
	likeByCommentsUser  : boolean = false;
	lockStatus : boolean = false;

	commentList : any = [
		{
			image : "assets/img/user-1.jpg",
			comment : "In ut ex eget metus elementum tristique.",
			by : "Andrew",
			daysAgo : "16 days ago"
		},
		{
			image : "assets/img/user-4.jpg",
			comment : "Aenean quis libero at leo feugiat vestibulum sit amet at mi.",
			by : "Smritha",
			daysAgo : "16 days ago" 
		}
	]

	constructor( public  activeModal : NgbActiveModal, 
                private formBuilder : FormBuilder,
                public translate: TranslateService) { }

	ngOnInit() {
		this.addNewComment = this.formBuilder.group({
        newComment   : ['']
      })
      
      var body = document.body;
		body.classList.add("feedback-modal");	
	}

	//sendComment method is used to send the comment.
	sendComment() {
		if(this.addNewComment.value.newComment !== ""){
			let newComment = {
				image : "assets/img/user-2.jpg",
				by : "Nikita",
				comment: this.addNewComment.value.newComment,
				daysAgo: "Just Now"
			}
			this.commentList.push(newComment);
			this.addNewComment.value.newComment = "";
		}
	}

	//commentAddToWishlist method is used to like the comment.
	commentAddToWishlist(parentClass){
		if(!(document.getElementById(parentClass).classList.contains('text-danger'))){
			document.getElementById(parentClass).className += " text-danger";
			document.getElementById(parentClass).classList.remove('text-muted');
		}
		else{
			document.getElementById(parentClass).className += " text-muted";
			document.getElementById(parentClass).classList.remove('text-danger');
		}
	}

	//likeByCurrentUser method is used to like/dislike the comment by the current user.
	likeByCurrentUser() {
		this.likeByCommentsUser = !this.likeByCommentsUser;
		if(this.likeByCommentsUser){
			this.commentLikes = this.commentLikes - 1;
		}
		else{
			this.commentLikes = this.commentLikes + 1;
		}
	}

	//commentsLock method is used to lock or unlock the comments.
	commentsLock() {
		this.lockStatus = !this.lockStatus;
		if(this.lockStatus) {
			document.getElementById('comment-lock').innerHTML = "Unlock";
		}
		else{
			document.getElementById('comment-lock').innerHTML = "Lock";
		}
	}

	ngOnDestroy() {
		var body = document.body;
		body.classList.remove("feedback-modal");
	}
}
