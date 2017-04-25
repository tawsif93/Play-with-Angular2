import { Component, OnInit } from '@angular/core';
import { Auth } from '../shared/services/auth.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	constructor(private auth: Auth) { }

	ngOnInit() {
	}

}
