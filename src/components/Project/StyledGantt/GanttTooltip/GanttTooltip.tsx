import {FC} from 'react'

import {GanttTooltipProps} from './GanttTooltip-props'
import {Flex, Tag, Text, useColorMode, VStack} from '@chakra-ui/react'


export const GanttTooltip: FC<GanttTooltipProps> = ({task}) => {
	const {colorMode} = useColorMode()
	const bg = colorMode === 'light' ? 'gray.100' : 'gray.800'
	const scheme = colorMode === 'light' ? 'purple' : 'blue'
	const tagScheme = colorMode === 'light' ? 'blue' : 'gray'
	return (
		<VStack
			as={Tag}
			variant='outline'
			colorScheme={scheme}
			bg={bg}
			spacing={3}
			p={2}
		>
			<Text fontSize='md'>{task.name}</Text>
			<Flex gap={5}>
				<Tag colorScheme={tagScheme} fontSize='sm'>{`Начало: ${task.start.toLocaleDateString()}`}</Tag>
				<Tag colorScheme={tagScheme} fontSize='sm'>{`Конец: ${task.end.toLocaleDateString()}`}</Tag>
			</Flex>
		</VStack>
	)
}
