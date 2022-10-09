import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import {ColorModeScript} from '@chakra-ui/react'
import theme from './lib/chakra-ui/theme'
import {App} from './App'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(container)

root.render(
	<React.StrictMode>
		<DndProvider backend={HTML5Backend}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
			<App/>
		</DndProvider>
	</React.StrictMode>
)