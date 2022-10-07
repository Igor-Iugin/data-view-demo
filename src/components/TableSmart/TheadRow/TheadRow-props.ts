import {HTMLAttributes} from 'react'
import {HeaderGroup} from '@tanstack/react-table'

export interface TheadRowProps extends HTMLAttributes<HTMLDivElement> {
	group: HeaderGroup<any>
}
