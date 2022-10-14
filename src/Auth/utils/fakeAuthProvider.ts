export const fakeAuthProvider = {
	isAuthenticated: false,
	signin(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = true
		callback()
	},
	signout(callback: VoidFunction) {
		fakeAuthProvider.isAuthenticated = false
		callback()
	},
};