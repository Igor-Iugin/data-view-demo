import {TData} from './index'


export interface OrgData {
	designation: TData<string>
	name: TData<string>
	city: TData<string>
	address: TData<string>
	contact: TData<string>
	phone: TData<string>
	note: TData<string>
}