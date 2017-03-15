import { Component } from '@angular/core';
import {FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
	selector   : 'app-root',
	templateUrl: './app.component.html',
	styleUrls  : ['./app.component.css']
})

export class AppComponent {
	title = 'app works! Yeah';
	
	public loginForm = this.fb.group({
		email   : ["", this.containsMagicWord],
		password: ["", Validators.required]
	});
	
	private containsMagicWord(c: FormControl) {
		if (c.value.indexOf('magic') >= 0) {
			console.log('not valid');
			return {
				noMagic: true
			}
		}
		
		// Null means valid, believe it or not
		console.log('valid');
		return null
	}
	
	constructor(public fb: FormBuilder) {
	}
	
	doLogin(event) {
		console.log(event);
		console.log(this.loginForm.value);
	}
}



