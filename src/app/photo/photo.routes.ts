import { PhotoListComponent } from "./photoList/photoList.component";
import { PhotoDetailComponent } from "./photoDetail/photoDetail.component";

export const photoRoutes = [
	{ path: "", component: PhotoListComponent },
	{ path: ":id", component: PhotoDetailComponent }
];
