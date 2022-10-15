import {HTMLAttributes} from 'react'

export interface GanttHeaderProps extends HTMLAttributes<HTMLDivElement> {
	headerHeight: number
	rowWidth: string
	fontFamily: string
	fontSize: string
}
