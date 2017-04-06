import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SimpleformComponent } from './simpleform/simpleform.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

const appRoutes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'home', component: HomePageComponent },
	{ path: 'simpleform', component: SimpleformComponent },
	{ path: 'complexform', component: ComplexformComponent },
	{ path: 'validationform', component: FormvalidationComponent },
	{ path: '**', component: NotFoundComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] }
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
