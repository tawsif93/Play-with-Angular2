import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { COMPILER_PROVIDERS } from '@angular/compiler';

const SHARED_COMPONENTS  = [

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
			providers: []
		};
	}
}