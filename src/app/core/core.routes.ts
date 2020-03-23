export const coreRoutes = [
	{
		path: "",
		loadChildren: () =>
			import("../photo/photo.module").then(module => module.PhotoModule)
	}
];
