import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ScrollingModule } from "@angular/cdk/scrolling";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { PhotoEffects } from "./state/photo.effects";
import { reducer } from "./state/photo.reducer";

import { SharedModule } from "../shared/shared.module";

import { PhotoService } from "./shared/photo.service";

import { photoRoutes } from "./photo.routes";

import { PhotoListComponent } from "./photoList/photoList.component";
import { PhotoDetailComponent } from "./photoDetail/photoDetail.component";
import { PhotoEditComponent } from "./photoDetail/photoEdit.component";
import { PhotoCreateComponent } from "./photoCreate/photoCreate.component";

@NgModule({
	imports: [
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(photoRoutes),
		StoreModule.forFeature("photos", reducer),
		EffectsModule.forFeature([PhotoEffects]),
		ScrollingModule
	],
	declarations: [
		PhotoListComponent,
		PhotoDetailComponent,
		PhotoEditComponent,
		PhotoCreateComponent
	],
	providers: [PhotoService]
})
export class PhotoModule {}
