import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Http, Response, Request, RequestMethod} from '@angular/http';

@Component({
	selector   : 'app-login',
	templateUrl: './login.component.html',
	styleUrls  : ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	authenticated: boolean;
	profile: Object;

	constructor(fb: FormBuilder, public http: Http) {
		// We’ll check if the user is logged in once this component is loaded.
		// We’ll do this by checking if a jwt key value pair exists in local storage.
		if (localStorage.getItem('jwt')) {
			this.authenticated = true;
			// If the jwt key value exists, we’ll know the user is logged in, so we’ll get their profile.
			this.profile = JSON.parse(localStorage.getItem('profile'));
		}
		// For our form, we’ll just have two fields and we’ll require both of them to be filled out before the form can be submitted
		this.loginForm = fb.group({
			'email'   : [null, Validators.required],
			'password': [null, Validators.required],
		});
	}

	submitForm(value: any) {
		// Once the form is submitted and we get the users email and password we’ll format our request based on the Auth0 API.
		const form = {
			'client_id' : 'OYZIbStHeL0HpepmIBJrKxaqAo7puUjW',
			'username'  : value.email,
			'password'  : value.password,
			'connection': 'Username-Password-Authentication',
			'grant_type': 'password',
			'scope'     : 'openid name email'
		};
		// Once we have our data formed, we’ll send the request using the Angular 2 HTTP library.
		this.http.post('https://tawsif.auth0.com/oauth/ro', form).subscribe(
			(res: any) => {
				// We’ll subscribe to the request and capture the response
				const data = res.json();
				// If we get an id_token, we’ll know the request is successful
				// so we’ll store the token in localStorage.
				// We won’t handle the error use case for this tutorial.
				if (data.id_token) {
					localStorage.setItem('jwt', data.id_token);
					// Finally, we’ll call our getUserInfo function which will get the user details from Auth0
					this.getUserInfo(data);
				}
				console.log(data);
			}
		);
	}

	// Here we are similarly calling the Auth0 API, this time the /
	// tokeninfo endpoint which will return the users data we requested.
	// All we’ll need to pass to the request is our JSON Web Token.
	getUserInfo(data: any) {
		const form = {
			'id_token': data.id_token
		};
		this.http.post('https://tawsif.auth0.com/tokeninfo', form).subscribe(
			(res: any) => {
				// tslint:disable-next-line:no-shadowed-variable
				const data = res.json();
				this.profile = data;
				localStorage.setItem('profile', JSON.stringify(data));
				this.authenticated = true;
				// We’ll use the reset() method to reset the form.
				// So if a user logs out they will need to enter their credentials again.
				// If we did not do this, the previous values would still be displayed.
				this.loginForm.reset();
			}
		);
	}

	// We’ll implement a logout function that removes the jwt and user profile from localStorage and sets
	// the authenticated boolean to false which will cause the component to display the login form.
	logout() {
		localStorage.removeItem('jwt');
		localStorage.removeItem('profile');
		this.authenticated = false;
	}

	ngOnInit() {
	}

}
