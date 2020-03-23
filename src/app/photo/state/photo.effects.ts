import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { mergeMap, map, tap } from "rxjs/operators";

import { PhotoService } from "../shared/photo.service";
import { IPhoto } from "../shared/photo.model";

import * as photoActions from "./photo.actions";

@Injectable()
export class PhotoEffects {
	constructor(
		private actions$: Actions,
		private photoService: PhotoService,
		private router: Router
	) {}

	@Effect()
	loadPhotos$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.LoadPhotos),
		mergeMap((action: photoActions.LoadPhotos) =>
			this.photoService
				.getPhotos()
				.pipe(
					map(
						(photos: IPhoto[]) =>
							new photoActions.LoadPhotosSuccess(photos)
					)
				)
		)
	);

	@Effect()
	loadPhotoDetail$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.LoadDetailPhoto),
		map((action: photoActions.LoadDetailPhoto) => action.payload),
		mergeMap((payload: number) =>
			this.photoService
				.getPhoto(payload)
				.pipe(
					map(
						(photo: IPhoto) =>
							new photoActions.LoadDetailPhotoSuccess(photo)
					)
				)
		)
	);

	@Effect()
	createPhoto$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.CreatePhoto),
		map((action: photoActions.CreatePhoto) => action.payload),
		mergeMap((payload: IPhoto) =>
			this.photoService
				.createPhoto(payload)
				.pipe(
					map(
						(photo: IPhoto) =>
							new photoActions.CreatePhotoSuccess(photo)
					)
				)
		)
	);

	@Effect()
	updatePhotoDetail$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.UpdateDetailPhoto),
		map((action: photoActions.UpdateDetailPhoto) => action.payload),
		mergeMap((payload: IPhoto) =>
			this.photoService
				.updatePhoto(payload)
				.pipe(
					map(
						(photo: IPhoto) =>
							new photoActions.UpdateDetailPhotoSuccess(photo)
					)
				)
		)
	);

	@Effect()
	deletePhoto$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.DeletePhoto),
		map((action: photoActions.DeletePhoto) => action.payload),
		mergeMap((payload: number) =>
			this.photoService
				.deletePhoto(payload)
				.pipe(
					map(
						(payload: number) =>
							new photoActions.DeletePhotoSuccess(payload)
					)
				)
		)
	);

	@Effect({ dispatch: false })
	deletePhotoSuccess$ = this.actions$.pipe(
		ofType(photoActions.PhotoActionTypes.DeletePhotoSuccess),
		tap(actions => this.router.navigate(["/"]))
	);
}
