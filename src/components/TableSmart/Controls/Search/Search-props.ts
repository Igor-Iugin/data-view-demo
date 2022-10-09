import {HTMLAttributes} from 'react'

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
	columns: {
		header: string
		accessorKey: string
	}[]
}
