import {GanttProps, Task, ViewMode} from 'gantt-task-react'

export interface StyledGanttProps extends Omit<GanttProps, 'columnWidth'
	| 'listCellWidth'
	| 'fontFamily'
	| 'locale'
	| 'TaskListHeader'
	| 'TooltipContent'
	| 'TaskListTable'
	| 'timeStep'> {
	tasks: Task[]
	timeStep?: Omit<ViewMode, 'QuarterDay' | 'HalfDay'>
}
