import {HTMLAttributes} from 'react'

export interface TableSmartProps extends HTMLAttributes<HTMLDivElement> {
}

export interface TableColumn {
	header: string
	accessorKey: string
}