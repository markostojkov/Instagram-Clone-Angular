import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "./core/core.module";

import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, CoreModule, NoopAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
