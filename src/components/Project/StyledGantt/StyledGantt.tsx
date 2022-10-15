import {FC} from 'react'

import {StyledGanttProps} from './StyledGantt-props'
import {Gantt, ViewMode} from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import {GanttHeader} from './GanttHeader'
import {GanttTasks} from './GanttTasks'
import {GanttTooltip} from './GanttTooltip'


const timeStepCalc = (timeStep: Omit<ViewMode, 'QuarterDay' | 'HalfDay'>) => {
	const hour = 1000 * 60 * 60
	const day = hour * 24
	const week = day * 7
	const month = week * 30
	const year = month * 12

	switch (timeStep) {
		case ViewMode.Hour:
			return hour
		case ViewMode.Day:
			return day
		case ViewMode.Week:
			return week
		case ViewMode.Month:
			return month
		case ViewMode.Year:
			return year
		default:
			return hour
	}
}

export const StyledGantt: FC<StyledGanttProps> = ({tasks, viewMode = ViewMode.Month, timeStep, ...props}) => {
	const columnWidth = () => {
		switch (viewMode) {
			case ViewMode.Day:
				return 45
			case ViewMode.Month:
				return 100
			case ViewMode.Year:
				return 200
			default:
				return 45
		}
	}

	return (
		<Gantt
			tasks={tasks}
			viewMode={viewMode}
			columnWidth={columnWidth()}
			listCellWidth={'100px'}
			fontFamily='inherit'
			locale='ru-RU'
			todayColor='rgba(0,0,0, .15)'
			timeStep={timeStep ? timeStepCalc(timeStep) : timeStepCalc(ViewMode.Day)}
			TaskListHeader={props => <GanttHeader {...props}/>}
			TaskListTable={props => <GanttTasks {...props}/>}
			TooltipContent={props => <GanttTooltip {...props}/>}
			{...props}
		/>
	)
}
