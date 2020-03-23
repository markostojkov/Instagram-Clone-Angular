import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { IPhoto } from "./photo.model";

@Injectable()
export class PhotoService {
	constructor(private http: HttpClient) {}

	getPhotos(): Observable<IPhoto[]> {
		return this.http
			.get<IPhoto[]>(`http://jsonplaceholder.typicode.com/photos`)
			.pipe(catchError(this.handleError<IPhoto[]>("Get Photos", [])));
	}

	getPhoto(id: number): Observable<IPhoto> {
		return this.http
			.get<IPhoto>(`http://jsonplaceholder.typicode.com/photos/${id}`)
			.pipe(catchError(this.handleError<IPhoto>("Get Photo")));
	}

	createPhoto(photo) {
		return this.http
			.post<IPhoto>(
				"http://jsonplaceholder.typicode.com/photos",
				photo,
				this.getHeader()
			)
			.pipe(catchError(this.handleError<IPhoto>("Create Photo")));
	}

	updatePhoto(photo) {
		return this.http
			.put<IPhoto>(
				`http://jsonplaceholder.typicode.com/photos/${photo.id}`,
				photo,
				this.getHeader()
			)
			.pipe(catchError(this.handleError<IPhoto>("Update Photo")));
	}

	deletePhoto(id) {
		return this.http
			.delete<number>(
				`http://jsonplaceholder.typicode.com/photos/${id}`,
				this.getHeader()
			)
			.pipe(catchError(this.handleError<IPhoto>("Delete Photo")));
	}

	private handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			console.error(error);
			return of(result as T);
		};
	}

	private getHeader() {
		return {
			headers: new HttpHeaders({ "Content-Type": "application/json" })
		};
	}
}
