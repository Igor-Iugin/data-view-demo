import {TData} from './index'

export interface WorkerData {
	firstName: TData<string>
	lastName: TData<string>
	secondName: TData<string>
	post: TData<string>
	contact: TData<string>
	note: TData<string>
	priority: TData<number>
}