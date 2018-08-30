import {ParentEntity} from './parentEntity.model';
export class UserModel extends ParentEntity {
	public first_name: string;
	public second_name: string;
	public first_surname: string;
	public second_surname: string;
	public phone: string;
	public addres: string;
}