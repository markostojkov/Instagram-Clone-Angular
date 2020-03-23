import {
	Component,
	OnInit,
	Input,
	Output,
	OnChanges,
	EventEmitter
} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { IPhoto } from "../shared/photo.model";

@Component({
	selector: "photo-edit",
	templateUrl: "./photoEdit.component.html"
})
export class PhotoEditComponent implements OnChanges {
	@Input() photo: IPhoto;
	@Output() updateChild = new EventEmitter<IPhoto>();
	editPhotoForm: FormGroup;
	title: FormControl;
	albumId: FormControl;
	url: FormControl;

	ngOnChanges() {
		if (this.photo) {
			this.title = new FormControl(this.photo.title, Validators.required);
			this.albumId = new FormControl(
				this.photo.albumId,
				Validators.required
			);
			this.url = new FormControl(this.photo.url, Validators.required);
			this.editPhotoForm = new FormGroup({
				title: this.title,
				url: this.url,
				albumId: this.albumId
			});
		}
	}

	update(data) {
		if (this.editPhotoForm.valid) {
			if (!data.id) data.id = this.photo.id;
			this.updateChild.emit(data);
		}
	}
}
