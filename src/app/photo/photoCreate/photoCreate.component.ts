import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { IPhoto } from "../shared/photo.model";

@Component({
	selector: "photo-create",
	templateUrl: "./photoCreate.component.html"
})
export class PhotoCreateComponent implements OnInit {
	@Output() createChild = new EventEmitter<IPhoto>();
	@Input() createMode: boolean;
	createPhotoForm: FormGroup;
	title: FormControl;
	albumId: FormControl;
	url: FormControl;
	thumbnailUrl: FormControl;

	ngOnInit() {
		this.title = new FormControl("", Validators.required);
		this.albumId = new FormControl("", Validators.required);
		this.url = new FormControl("", Validators.required);
		this.thumbnailUrl = new FormControl("", Validators.required);
		this.createPhotoForm = new FormGroup({
			title: this.title,
			url: this.url,
			thumbnailUrl: this.thumbnailUrl,
			albumId: this.albumId
		});
	}

	create(data) {
		if (this.createPhotoForm.valid) {
			this.createChild.emit(data);
			this.createPhotoForm.reset();
		}
	}
}
