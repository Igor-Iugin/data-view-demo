import {FC} from 'react'

import {GanttHeaderProps} from './GanttHeader-props'
import {Center, useColorMode} from '@chakra-ui/react'


export const GanttHeader: FC<GanttHeaderProps> = ({headerHeight}) => {
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
		<Center
			h={headerHeight}
			w='300px'
			border='1px solid'
			borderColor={bdColor}
			borderTopLeftRadius='md'
		>
			Название
		</Center>
	)
}
