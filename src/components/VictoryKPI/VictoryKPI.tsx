import {FC} from 'react'

import {VictoryKPIProps} from './VictoryKPI-props'
import {
	VictoryArea,
	VictoryAxis,
	VictoryChart,
	VictoryGroup,
	VictoryScatter,
	VictoryTooltip,
	VictoryVoronoiContainer
} from 'victory'
import {useToken} from '@chakra-ui/react'


const monthNames = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'
]
export const VictoryKPI: FC<VictoryKPIProps> = ({data}) => {
	const [blue, blue400] = useToken('colors', ['blue.100', 'blue.400'])
	return (
		<VictoryChart
			domain={{y: [0, 50]}}
			containerComponent={<VictoryVoronoiContainer/>}
		>
			<VictoryGroup
				labels={({datum}) => datum.y}
				labelComponent={<VictoryTooltip style={{fontSize: 10}}/>}
				data={data}
			>
				<VictoryArea
					style={{
						data: {
							stroke: blue,
							fill: blue
						}
					}}
					interpolation='linear'
				/>
				<VictoryScatter
					size={({active}) => active ? 5 : 3}
					style={{data: {fill: blue400}}}
				/>
			</VictoryGroup>
			<VictoryAxis
				data={data}
				tickFormat={(v) => monthNames[new Date(v).getMonth()]}
				style={{
					axis: {stroke: 'currentColor'},
					tickLabels: {
						fill: 'currentColor',
						fontSize: 8
					}
				}}
			/>
			<VictoryAxis
				dependentAxis
				data={data}
				style={{axis: {stroke: 'currentColor'}, tickLabels: {fill: 'currentColor'}}}
			/>
		</VictoryChart>
	)
}
