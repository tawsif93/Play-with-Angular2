import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileEdit } from './profile_edit.component';
import { ProfileShow } from './profile_show.component';

import { ProfileService } from './profile.service';

import { ProfileRoutes } from './profile.routes';

@NgModule({
	imports: [SharedModule, ProfileRoutes],
	declarations: [ProfileComponent, ProfileEdit, ProfileShow],
	exports: [],
	providers: [ProfileService]
})

export default class ProfileModule {
}
