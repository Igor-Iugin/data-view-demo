import {GanttProps, Task} from 'gantt-task-react'

export interface StyledGanttProps extends Omit<GanttProps, 'columnWidth'
	| 'listCellWidth'
	| 'fontFamily'
	| 'locale'
	| 'TaskListHeader'
	| 'TooltipContent'
	| 'TaskListTable'> {
	tasks: Task[]
}
