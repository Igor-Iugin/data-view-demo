import {ChakraProvider} from '@chakra-ui/react'
import theme from './lib/chakra-ui/theme'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import {Dashboard, Home, Login} from './pages'
import {Layout} from './layout'
import {AuthProvider, RequireAuth} from './Auth'
import {ReactNode} from 'react'


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/login' element={<Login/>}/>

			<Route element={<RequireAuth><Layout/></RequireAuth>}>
				<Route path='/' element={<Dashboard/>}/>
				<Route path='/table' element={<Home/>}/>
			</Route>
		</Route>
	)
)

const AppProviders = ({children}: { children: ReactNode }) => (
	<ChakraProvider theme={theme}>
		<AuthProvider>
			{children}
		</AuthProvider>
	</ChakraProvider>
)

export const App = () => (
	<AppProviders>
		<RouterProvider router={router}/>
	</AppProviders>
)
