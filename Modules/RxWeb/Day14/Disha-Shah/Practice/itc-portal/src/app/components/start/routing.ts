import { Routes} from "@angular/router";

var routings = [
	{
		path: '', redirectTo: 'login', pathMatch: 'full',
	},
	{
		path: "login",
		loadChildren: () => import("../authentication/login/login.module").then(m => m.LoginModule),
	},
	{
		path: "dashboard",
		loadChildren: () => import("../dashboard/dashboard.module").then(m => m.DashboardModule),
	},
	{
		path: "forgot-password",
		loadChildren: () => import("../authentication/forgot-password/forgot-password.module").then(m => m.ForgotPasswordModule),
	},
	{
		path: '**', redirectTo: 'login'
	}
]

//generated code
//])


export const ROUTES: Routes = routings;





