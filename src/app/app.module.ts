import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

// We need to import the ReactiveFormsModule and import it
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleformComponent } from './simpleform/simpleform.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { appRouting } from './app.routing';
import { SharedModule } from './shared/shared.module';


@NgModule({
	declarations: [
		AppComponent,

		// Declare the three components as part of the root NgModule
		SimpleformComponent,
		ComplexformComponent,
		FormvalidationComponent,
		HomePageComponent,
		LoginComponent,
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		appRouting,
		NgbModule.forRoot(),
		MaterialModule,
		AngularFireModule.initializeApp(environment.firebase),
		FlexLayoutModule,
		SharedModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
