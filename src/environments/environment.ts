// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	// Initialize Firebase
	firebase: {
		apiKey: 'AIzaSyDGILIvU-FYzdJ-TlSQm-TM7kFxwWXpsUI',
		authDomain: 'chat-app-3e5c0.firebaseapp.com',
		databaseURL: 'https://chat-app-3e5c0.firebaseio.com',
		storageBucket: 'chat-app-3e5c0.appspot.com',
		messagingSenderId: '12388931918'
	},

	auth0: {
		clientID: 'OYZIbStHeL0HpepmIBJrKxaqAo7puUjW',
		domain: 'tawsif.auth0.com'
	}

};
