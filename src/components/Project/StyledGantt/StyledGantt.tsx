import {FC, useState} from 'react'

import {StyledGanttProps} from './StyledGantt-props'
import {Gantt, ViewMode} from 'gantt-task-react'
import 'gantt-task-react/dist/index.css'
import {GanttHeader} from './GanttHeader'
import {GanttTasks} from './GanttTasks'
import {GanttTooltip} from './GanttTooltip'


export const StyledGantt: FC<StyledGanttProps> = ({tasks}) => {
	const [isChecked, setIsChecked] = useState(true)

	const [view, setView] = useState<ViewMode>(ViewMode.Month)
	const columnWidth = () => {
		switch (view) {
			case ViewMode.Month:
				return 100
			case ViewMode.Year:
				return 200
			default:
				return 65
		}
	}
	return (
		<Gantt
			tasks={tasks}
			viewMode={view}
			columnWidth={columnWidth()}
			listCellWidth={'100px'}
			fontFamily='inherit'
			locale='ru-RU'
			TaskListHeader={props => <GanttHeader {...props}/>}
			TaskListTable={props => <GanttTasks {...props}/>}
			TooltipContent={props => <GanttTooltip {...props}/>}
		/>
	)
}
