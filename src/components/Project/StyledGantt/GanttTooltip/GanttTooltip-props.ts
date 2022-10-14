import {HTMLAttributes} from 'react'
import {Task} from 'gantt-task-react'

export interface GanttTooltipProps extends HTMLAttributes<HTMLDivElement> {
	task: Task
	fontSize: string
	fontFamily: string
}