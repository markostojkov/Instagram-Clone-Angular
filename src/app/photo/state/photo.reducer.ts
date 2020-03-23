import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IPhoto } from "../shared/photo.model";

import { PhotoActions, PhotoActionTypes } from "./photo.actions";

import { CoreState } from "../../core/core.state";

export interface State extends CoreState {
	photos: PhotoState;
}

export interface PhotoState {
	photos: IPhoto[];
	detailPhoto: IPhoto;
}

const initialState: PhotoState = {
	photos: [],
	detailPhoto: null
};

const getPhotoFeatureState = createFeatureSelector<PhotoState>("photos");

export const getPhotos = createSelector(
	getPhotoFeatureState,
	state => state.photos
);

export const getDetailPhoto = createSelector(
	getPhotoFeatureState,
	state => state.detailPhoto
);

export function reducer(
	state: PhotoState = initialState,
	action: PhotoActions
): PhotoState {
	switch (action.type) {
		case PhotoActionTypes.LoadPhotosSuccess: {
			return {
				...state,
				photos: action.payload
			};
		}
		case PhotoActionTypes.CreatePhotoSuccess: {
			return {
				...state,
				photos: [action.payload, ...state.photos]
			};
		}
		case PhotoActionTypes.LoadDetailPhotoSuccess:
		case PhotoActionTypes.UpdateDetailPhotoSuccess: {
			return {
				...state,
				detailPhoto: action.payload
			};
		}
		default:
			return state;
	}
}
