import {FC} from 'react'

import {PKPIProps} from './PKPI-props'
import {Grid} from '@chakra-ui/react'
import {useProject} from '../../Project'
import {VictoryKPI} from '../../../VictoryKPI'


export const PKPI: FC<PKPIProps> = () => {
	const {plannedEffect: {data}} = useProject()
	return (
		<Grid w='800px'>
			<VictoryKPI data={data}/>
		</Grid>
	)
}
