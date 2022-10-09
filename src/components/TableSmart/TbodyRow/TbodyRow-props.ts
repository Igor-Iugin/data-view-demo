import {HTMLAttributes} from 'react'
import {Row} from '@tanstack/react-table'

export interface TbodyRowProps extends HTMLAttributes<HTMLDivElement> {
	row: Row<any>
	reorder: (draggedRow: number, targetRow: number) => void
}
