import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
	selector: 'profile',
	templateUrl: 'app/profile_edit.template.html'
})

export class ProfileEdit {
	address: String;
	constructor(private service: ProfileService, private router: Router) {
		this.address = service.authService.address;
	}

	onSubmit() {
		var headers: any = {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		};

		var data: any = JSON.stringify({
			user_metadata: {
				address: this.address
			}
		});

		this.authHttp
			.patch('https://' + myConfig.domain + '/api/v2/users/' + this.auth.userProfile.user_id, data, { headers: headers })
			.map(response => response.json())
			.subscribe(
			response => {
				this.auth.userProfile = response;
				localStorage.setItem('profile', JSON.stringify(response));
				this.router.navigate(['/profile']);
			},
			error => alert(error.json().message)
			);
	}
}
