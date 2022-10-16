import {FC} from 'react'

import {PKPIProps} from './PKPI-props'
import {Box, SimpleGrid} from '@chakra-ui/react'
import {useProject} from '../../Project'
import {VictoryKPI} from '../../../VictoryKPI'
import {ChartJSKPI} from '../../../ChartJSKPI'


export const PKPI: FC<PKPIProps> = () => {
	const {plannedEffect: {data}} = useProject()
	return (
		<SimpleGrid columns={2}>
			<Box h='500px'>
				<VictoryKPI data={data}/>
			</Box>
			<Box h='500px'>
				<ChartJSKPI data={data}/>
			</Box>
		</SimpleGrid>
	)
}
