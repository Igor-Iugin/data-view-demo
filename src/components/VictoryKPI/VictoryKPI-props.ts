import {HTMLAttributes} from 'react'

export interface VictoryKPIProps extends HTMLAttributes<HTMLDivElement> {
	data: {
		x: Date,
		y: number
	}[]
}
