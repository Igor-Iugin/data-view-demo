import * as React from 'react'
import {Home} from './pages/Home'
import {ChakraProvider} from '@chakra-ui/react'
import theme from './lib/chakra-ui/theme'

export const App = () => (
	<ChakraProvider theme={theme}>
		<Home/>
	</ChakraProvider>
)
