import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { AuthGuard } from './guards/auth-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
import { SharedService } from './shared.service';
import { Auth } from './services/auth.service';

const SHARED_COMPONENTS = [

];

@NgModule({
	imports: [CommonModule, RouterModule, FormsModule],
	declarations: SHARED_COMPONENTS,
	exports: [
		SHARED_COMPONENTS,
		CommonModule,
		FormsModule
	],

	providers: [COMPILER_PROVIDERS]
})
export class SharedModule {

	static forRoot(): ModuleWithProviders {
		return {
			ngModule: SharedModule,
			providers: [
				AuthGuard,
				CanDeactivateGuard,
				SharedService,
				Auth
			]
		};
	}
}