import {FC, useState} from 'react'

import {StyledGanttProps} from './StyledGantt-props'
import {Gantt, ViewMode} from 'gantt-task-react'


export const StyledGantt: FC<StyledGanttProps> = ({tasks}) => {
	const [isChecked, setIsChecked] = useState(true)

	const [view, setView] = useState<ViewMode>(ViewMode.Day)
	const columnWidth = () => {
		switch (view) {
			case ViewMode.Week:
				return 250
			case ViewMode.Month:
				return 300
			case ViewMode.Year:
				return 350
			default:
				return 65
		}
	}
	return (
		<Gantt
			tasks={tasks}
			viewMode={ViewMode.Day}
			listCellWidth={isChecked ? '155px' : ''}
			columnWidth={columnWidth()}
			fontFamily='inherit'
			fontSize='inherit'
		/>
	)
}
