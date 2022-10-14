import {createContext, ReactNode, useContext, useState} from 'react'

import {IAuthContext} from './Auth-props'
import {fakeAuthProvider} from './utils/fakeAuthProvider'
import {Navigate, useLocation} from 'react-router'


let AuthContext = createContext<IAuthContext>(null!)

export const AuthProvider = ({children}: { children: ReactNode }) => {
	let [user, setUser] = useState<any>(null)

	let signin = (newUser: string, callback: VoidFunction) => {
		return fakeAuthProvider.signin(() => {
			setUser(newUser)
			callback()
		})
	}

	let signout = (callback: VoidFunction) => {
		return fakeAuthProvider.signout(() => {
			setUser(null)
			callback()
		})
	}

	let value = {user, signin, signout}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	return useContext(AuthContext)
}

export function RequireAuth({children}: { children: JSX.Element }) {
	let auth = useAuth()
	let location = useLocation()

	if (!auth.user) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they log in, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to='/login' state={{from: location}} replace/>
	}

	return children
}