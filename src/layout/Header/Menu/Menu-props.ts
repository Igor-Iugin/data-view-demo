import {HTMLAttributes} from 'react'

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	onClose: () => void
}
