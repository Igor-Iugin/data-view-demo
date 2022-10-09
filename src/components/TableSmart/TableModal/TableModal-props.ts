import {HTMLAttributes} from 'react'
import {TableColumn} from '../TableSmart-props'
import {Table} from '@tanstack/react-table'

export interface TableModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	onClose: () => void
	columns: TableColumn[]
	table: Table<any>
}
