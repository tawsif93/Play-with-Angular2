import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../../environments/environment';
import Auth0Lock from 'auth0-lock';

// Avoid name not found warnings
// declare var Auth0Lock: any;

@Injectable()
export class Auth {
	// Configure Auth0
	lock = new Auth0Lock(environment.auth0.clientID, environment.auth0.domain, {
		// allowSignUp: false,
		languageDictionary: {
			emailInputPlaceholder: 'something@youremail.com',
			title: 'Log me in'
		},
		theme: {
			logo: '../../../assets/images/explore.svg',
			primaryColor: 'green'
		},
		additionalSignUpFields: [
			{
				name: 'address',                              // required
				placeholder: 'enter your address',            // required
				icon: '../../../assets/110791-sweet-home/svg/web-page-home.svg', // optional
				validator: function (value) {                  // optional
					// only accept addresses with more than 10 chars
					return {
						valid: value.length > 10,
						hint: 'Must have 10 or more chars'
					};
				}
			},
			{
				name: 'name',
				icon: 'img/name.svg',
				placeholder: 'your name'
			},
			{
				name: 'last_name',
				icon: 'img/name.svg',
				placeholder: 'your last name'
			}
		]
	});

	// Store profile object in auth class
	userProfile: any;

	constructor() {
		// Set userProfile attribute if already saved profile
		this.userProfile = JSON.parse(localStorage.getItem('profile'));

		// Add callback for lock `authenticated` event
		this.lock.on('authenticated', (authResult) => {
			localStorage.setItem('id_token', authResult.idToken);

			// Fetch profile information
			this.lock.getProfile(authResult.idToken, (error, profile) => {
				if (error) {
					// Handle error
					alert(error);
					return;
				}
				console.log(profile);
				profile.user_metadata = profile.user_metadata || {};
				localStorage.setItem('profile', JSON.stringify(profile));
				this.userProfile = profile;
			});
		});
	};

	public login() {
		// Call the show method to display the widget.
		this.lock.show();
	};

	public authenticated() {
		// Check if there's an unexpired JWT
		// It searches for an item in localStorage with key == 'id_token'
		return tokenNotExpired();
	};

	public logout() {
		// Remove token and profile from localStorage
		localStorage.removeItem('id_token');
		localStorage.removeItem('profile');
		this.userProfile = undefined;
	};
}
