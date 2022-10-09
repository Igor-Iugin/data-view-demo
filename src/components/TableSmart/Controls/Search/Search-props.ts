import {HTMLAttributes} from 'react'
import {Table} from '@tanstack/react-table'


export interface SearchFields {
	column: string
	request: string
}

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
	columns: {
		header: string
		accessorKey: string
	}[]
	table: Table<any>
}
