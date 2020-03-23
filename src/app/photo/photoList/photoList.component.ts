import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";
import { takeWhile } from "rxjs/operators";

import { Store, select } from "@ngrx/store";

import { IPhoto } from "../shared/photo.model";

import * as fromPhotos from "../state/photo.reducer";
import * as photoActions from "../state/photo.actions";

@Component({
	templateUrl: "./photoList.component.html",
	styleUrls: ["./photoList.component.css"]
})
export class PhotoListComponent implements OnInit {
	photos: Observable<IPhoto[]>;
	createMode: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private store: Store<fromPhotos.State>
	) {}

	ngOnInit() {
		this.store.dispatch(new photoActions.LoadPhotos());
		this.photos = this.store.pipe(select(fromPhotos.getPhotos));
	}

	createPhoto(data) {
		this.store.dispatch(new photoActions.CreatePhoto(data));
	}
}
