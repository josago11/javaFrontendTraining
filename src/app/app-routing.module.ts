import  {UserComponent} from './user/user.component'
import  {CreateUserComponent} from './create-user/create-user.component';
import {AppComponent} from './app.component';
import {RouterModule,  Routes} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes=[
	{path: '', redirectTo: '/userComponent', pathMatch: 'full'},
	{path: 'appComponent', component:AppComponent},
	{path: 'userComponent', component:UserComponent},
	{path: 'createUserComponent', component:CreateUserComponent},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }