import {HTMLAttributes} from 'react'
import {HeaderGroup, Table} from '@tanstack/react-table'

export interface TheadRowProps extends HTMLAttributes<HTMLDivElement> {
	table: Table<any>
	group: HeaderGroup<any>
}
