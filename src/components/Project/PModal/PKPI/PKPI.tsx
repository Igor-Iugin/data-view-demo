import {FC} from 'react'

import {PKPIProps} from './PKPI-props'
import {Box, SimpleGrid} from '@chakra-ui/react'
import {useProject} from '../../Project'
import {ChartJSBarKPI, ChartJSKPI} from '../../../ChartJSKPI'


export const PKPI: FC<PKPIProps> = () => {
	const {plannedEffect: {data, initialValue, aimedValue}} = useProject()
	const barData = [{x: 'Исходное значение', y: initialValue}, {x: 'Целевой показатель', y: aimedValue}]
	return (
		<SimpleGrid columns={2} gap={10}>
			<Box h='500px'>
				<ChartJSKPI data={data}/>
			</Box>
			<Box h='500px'>
				<ChartJSBarKPI data={barData}/>
			</Box>
		</SimpleGrid>
	)
}
