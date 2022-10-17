import {FC} from 'react'

import {PStatusProps} from './PStatus-props'
import {useProject} from '../../Project'
import {CheckCircleIcon, TimeIcon, WarningIcon} from '@chakra-ui/icons'
import {Tooltip} from '@chakra-ui/react'


export const PStatus: FC<PStatusProps> = () => {
	const {tasks} = useProject()
	const isSuccess = tasks.every(task => task.progress === 100)
	const isBad = tasks.some(task => task.styles?.progressColor === 'crimson')
	const label = isSuccess ? 'Выполнен' : isBad ? 'Просрочен' : 'В работе'

	return (
		<Tooltip label={label}>
			{
				isSuccess ? <CheckCircleIcon color='whatsapp.600'/>
				: isBad ? <WarningIcon color='crimson'/>
				: <TimeIcon color='orange'/>
			}
		</Tooltip>
	)
}
