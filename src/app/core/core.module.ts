import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { initialState } from "./core.state";

import { coreRoutes } from "./core.routes";

import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forRoot(coreRoutes),
		StoreModule.forRoot(initialState),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({})
	],
	exports: [NavbarComponent, RouterModule]
})
export class CoreModule {}
