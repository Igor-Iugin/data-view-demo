import {Dispatch, HTMLAttributes} from 'react'
import {Table} from '@tanstack/react-table'
import {TableColumn} from '../TableSmart-props'

export interface ControlsProps extends HTMLAttributes<HTMLDivElement> {
	columns: TableColumn[]
	table: Table<any>
	setData: Dispatch<any>
	data: any[]
}
