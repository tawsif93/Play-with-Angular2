import { Injectable } from '@angular/core';
import { Auth } from '../shared/services/auth.service';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';


@Injectable()
export class ProfileService {

	constructor(public authService: Auth) {

	}
}
