import {HTMLAttributes} from 'react'
import {ICondition} from '../../../../mocks/mockProjects'


interface TextInfo {
	title: string
	info: string
	type: 'text'
}

interface TextArrayInfo {
	title: string
	info: string[]
	type: 'array'
}

interface ConditionInfo {
	title: string
	info: ICondition
	type: 'condition'
}

export type InfoStructure = TextInfo | TextArrayInfo | ConditionInfo

export interface PCardProps extends HTMLAttributes<HTMLDivElement> {
}
