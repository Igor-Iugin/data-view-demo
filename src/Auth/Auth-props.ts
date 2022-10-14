export interface IAuthContext {
	user: any;
	signin: (user: string, callback: VoidFunction) => void;
	signout: (callback: VoidFunction) => void;
}
