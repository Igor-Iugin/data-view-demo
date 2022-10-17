import {FC} from 'react'

import {GanttTasksProps} from './GanttTasks-props'
import {Flex, Grid, useColorMode} from '@chakra-ui/react'
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'
import {Task} from 'gantt-task-react'


const getExpanderIcon = (task: Task) => {
	switch (task.hideChildren) {
		case true:
			return <TriangleUpIcon/>
		case false:
			return <TriangleDownIcon/>
		case undefined:
			return null
	}
}
//todo Починить скрытие подзадач
export const GanttTasks: FC<GanttTasksProps> = ({tasks, rowHeight, onExpanderClick}) => {
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
		<Grid>
			{tasks.map((task, index) => {
				return (
					<Flex
						h={rowHeight}
						w='300px'
						alignItems='center'
						pos='relative'
						border='1px solid'
						borderColor={bdColor}
						borderBottomLeftRadius={index === tasks.length - 1 ? 'md' : ''}
						p={2}
						pl={2}
						key={`task${task.id}`}
						onClick={() => onExpanderClick(task)}
						gap={2}
					>
						{getExpanderIcon(task)}
						{task.name}
					</Flex>
				)
			})}
		</Grid>
	)
}
