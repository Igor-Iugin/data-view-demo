import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import {ColorModeScript} from '@chakra-ui/react'
import theme from './lib/chakra-ui/theme'
import {App} from './App'


const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
		<App/>
	</React.StrictMode>
)