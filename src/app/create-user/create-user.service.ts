import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse.model';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
	constructor(private http:HttpClient) { }

	public validate(user: UserModel):boolean{
		let isValid = true;
		if(!user.first_name)
			isValid=false;
		if(!user.first_surname)
			isValid=false;
		if(!user.addres)
			isValid=false;
		return isValid;
	}
	public saveOrUpdate(user: UserModel):Observable<RestResponse>{

		return this.http.post<RestResponse>("http://localhost:8080/seveOrUpdate", JSON.stringify(user));
	}
}
