import {HTMLAttributes} from 'react'
import {Task} from 'gantt-task-react'

export interface GanttTasksProps extends HTMLAttributes<HTMLDivElement> {
	rowHeight: number
	rowWidth: string
	fontFamily: string
	fontSize: string
	locale: string
	tasks: Task[]
	selectedTaskId: string
	setSelectedTask: (taskId: string) => void
}