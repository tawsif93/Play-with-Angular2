import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

	public loginForm = this.fb.group({
		email: ['', this.containsMagicWord],
		password: ['', Validators.required]
	});

	private containsMagicWord(c: FormControl) {
		if (c.value.indexOf('magic') >= 0) {
			console.log('not valid');
			return {
				noMagic: true
			};
		}

		// Null means valid, believe it or not
		console.log('valid');
		return null;
	}

	constructor(public fb: FormBuilder) {
	}

	doLogin(event) {
		console.log(event);
		console.log(this.loginForm.value);
	}

	ngOnInit() {
	}

}
