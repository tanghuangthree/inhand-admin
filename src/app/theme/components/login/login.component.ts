import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../../../theme/models/user-model';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: User = new User();

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {

	}

	ngOnInit() {

	}

	login() {
		this.router.navigateByUrl("workspace");
	}
	forgetPwd() {
		
	}
}
