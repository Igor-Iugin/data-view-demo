import {HTMLAttributes} from 'react'
import {Table} from '@tanstack/react-table'
import {TableColumn} from '../../TableSmart-props'


export interface SearchFields {
	column: string
	request: string
}

export interface SearchProps extends HTMLAttributes<HTMLDivElement> {
	columns: TableColumn[]
	table: Table<any>
}
