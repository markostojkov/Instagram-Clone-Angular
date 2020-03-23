import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Observable } from "rxjs";

import { Store, select } from "@ngrx/store";

import { IPhoto } from "../shared/photo.model";

import * as fromPhotos from "../state/photo.reducer";
import * as photoActions from "../state/photo.actions";

declare var jQuery: any;

@Component({
	templateUrl: "./photoDetail.component.html"
})
export class PhotoDetailComponent implements OnInit {
	photo: Observable<IPhoto>;
	editMode: boolean = false;
	photoId: number;

	constructor(
		private route: ActivatedRoute,
		private store: Store<fromPhotos.State>
	) {
		this.photoId = +this.route.snapshot.paramMap.get("id");
	}

	ngOnInit() {
		this.store.dispatch(new photoActions.LoadDetailPhoto(this.photoId));
		this.photo = this.store.pipe(select(fromPhotos.getDetailPhoto));
	}

	updatePhoto(photo) {
		this.store.dispatch(new photoActions.UpdateDetailPhoto(photo));
	}

	deletePhoto() {
		jQuery("#exampleModal").modal("hide");
		this.store.dispatch(new photoActions.DeletePhoto(this.photoId));
	}
}
