import { Action } from "@ngrx/store";

import { IPhoto } from "../shared/photo.model";

export enum PhotoActionTypes {
	LoadPhotos = "[Photos] Load",
	LoadPhotosSuccess = "[Photos] Load Success",
	LoadPhotosFail = "[Photos] Load Fail",
	LoadDetailPhoto = "[Photo] Detail Load",
	LoadDetailPhotoSuccess = "[Photo] Detail Load Success",
	LoadDetailPhotoFail = "[Photo] Detail Load Fail",
	UpdateDetailPhoto = "[Photo] Detail Update",
	UpdateDetailPhotoSuccess = "[Photo] Detail Update Success",
	UpdateDetailPhotoFail = "[Photo] Detail Update Fail",
	CreatePhoto = "[Photo] Create",
	CreatePhotoSuccess = "[Photo] Create Success",
	CreatePhotoFail = "[Photo] Create Fail",
	DeletePhoto = "[Photo] Delete",
	DeletePhotoSuccess = "[Photo] Delete Success",
	DeletePhotoFail = "[Photo] Delete Fail"
}

export class LoadPhotos implements Action {
	readonly type = PhotoActionTypes.LoadPhotos;
}

export class LoadPhotosSuccess implements Action {
	readonly type = PhotoActionTypes.LoadPhotosSuccess;

	constructor(public payload: IPhoto[]) {}
}

export class LoadPhotosFail implements Action {
	readonly type = PhotoActionTypes.LoadPhotosFail;

	constructor(public payload: string) {}
}

export class LoadDetailPhoto implements Action {
	readonly type = PhotoActionTypes.LoadDetailPhoto;

	constructor(public payload: number) {}
}

export class LoadDetailPhotoSuccess implements Action {
	readonly type = PhotoActionTypes.LoadDetailPhotoSuccess;

	constructor(public payload: IPhoto) {}
}

export class LoadDetailPhotoFail implements Action {
	readonly type = PhotoActionTypes.LoadDetailPhotoFail;

	constructor(public payload: string) {}
}

export class UpdateDetailPhoto implements Action {
	readonly type = PhotoActionTypes.UpdateDetailPhoto;

	constructor(public payload: IPhoto) {}
}

export class UpdateDetailPhotoSuccess implements Action {
	readonly type = PhotoActionTypes.UpdateDetailPhotoSuccess;

	constructor(public payload: IPhoto) {}
}

export class UpdateDetailPhotoFail implements Action {
	readonly type = PhotoActionTypes.UpdateDetailPhotoFail;

	constructor(public payload: string) {}
}

export class CreatePhoto implements Action {
	readonly type = PhotoActionTypes.CreatePhoto;

	constructor(public payload: IPhoto) {}
}

export class CreatePhotoSuccess implements Action {
	readonly type = PhotoActionTypes.CreatePhotoSuccess;

	constructor(public payload: IPhoto) {}
}

export class CreatePhotoFail implements Action {
	readonly type = PhotoActionTypes.CreatePhotoFail;

	constructor(public payload: string) {}
}

export class DeletePhoto implements Action {
	readonly type = PhotoActionTypes.DeletePhoto;

	constructor(public payload: number) {}
}

export class DeletePhotoSuccess implements Action {
	readonly type = PhotoActionTypes.DeletePhotoSuccess;

	constructor(public payload: number) {}
}

export class DeletePhotoFail implements Action {
	readonly type = PhotoActionTypes.DeletePhotoFail;

	constructor(public payload: string) {}
}

export type PhotoActions =
	| LoadPhotos
	| LoadPhotosSuccess
	| LoadPhotosFail
	| LoadDetailPhoto
	| LoadDetailPhotoSuccess
	| LoadDetailPhotoFail
	| UpdateDetailPhoto
	| UpdateDetailPhotoSuccess
	| UpdateDetailPhotoFail
	| DeletePhoto
	| DeletePhotoSuccess
	| DeletePhotoFail
	| CreatePhoto
	| CreatePhotoSuccess
	| CreatePhotoFail;
