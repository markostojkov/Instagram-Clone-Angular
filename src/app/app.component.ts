import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	template: `
		<nav-bar></nav-bar>
		<div class="container content"><router-outlet></router-outlet></div>
	`,
	styles: [
		`
			.content {
				padding-top: 80px;
			}
		`
	]
})
export class AppComponent {
	title = "fakeInstagram";
}
