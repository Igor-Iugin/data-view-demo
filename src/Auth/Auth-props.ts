import {IUser} from '../interfaces/IUser'

export interface IAuthContext {
	user: IUser | null
	signin: (user: IUser, callback: VoidFunction) => void
	signout: (callback: VoidFunction) => void
}
