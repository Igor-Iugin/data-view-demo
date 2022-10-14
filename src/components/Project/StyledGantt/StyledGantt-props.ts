import {HTMLAttributes} from 'react'
import {Task} from 'gantt-task-react'

export interface StyledGanttProps extends HTMLAttributes<HTMLDivElement> {
	tasks: Task[]
}
