import {HTMLAttributes} from 'react'

export interface ControlsProps extends HTMLAttributes<HTMLDivElement> {
	columns: {
		header: string
		accessorKey: string
	}[]
}
