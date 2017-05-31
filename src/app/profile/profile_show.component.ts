import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
	selector: 'profile_show',
	templateUrl: 'app/profile_show.template.html'
})

export class ProfileShow {
	constructor(private service: ProfileService) { }
};
