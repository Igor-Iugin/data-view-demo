import {HTMLAttributes} from 'react'
import {Table} from '@tanstack/react-table'

export interface ControlsProps extends HTMLAttributes<HTMLDivElement> {
	columns: {
		header: string
		accessorKey: string
	}[]
	table: Table<any>
}
