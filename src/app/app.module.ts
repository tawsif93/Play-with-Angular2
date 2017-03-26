import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import {environment} from '../environments/environment';

import { AppComponent } from './app.component';

// Include the three components we created
import { SimpleFormComponent } from './app.simpleform';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidations';

// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';
import {SimpleformComponent} from './simpleform/simpleform.component';
import {ComplexformComponent} from './complexform/complexform.component';
import {FormvalidationComponent} from './formvalidation/formvalidation.component';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
	{path: '', component: HomePageComponent},
	{path: 'home', component: HomePageComponent},
	{path: 'simpleform', component: SimpleformComponent},
	{path: 'complexform', component: ComplexformComponent},
	{path: 'validationform', component: FormvalidationComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		
		// Declare the three components as part of the root NgModule
		SimpleFormComponent,
		ComplexFormComponent,
		FormValidationComponent,
		
		SimpleformComponent,
		ComplexformComponent,
		FormvalidationComponent,
		HomePageComponent,
		LoginComponent,
	],
	imports     : [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes),
		NgbModule.forRoot(),
		MaterialModule,
		AngularFireModule.initializeApp(environment.firebase),
		FlexLayoutModule
	],
	providers   : [],
	bootstrap   : [AppComponent]
})
export class AppModule { }
