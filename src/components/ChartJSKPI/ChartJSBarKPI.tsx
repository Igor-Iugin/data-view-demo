import {FC, useEffect, useRef} from 'react'
import {Chart as ChartJS, ChartData, ChartOptions, registerables} from 'chart.js'
import {Chart} from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'

import {ChartJSBarKPIProps} from './ChartJSKPI-props'
import {useColorMode, useToken} from '@chakra-ui/react'
import {morphDays} from '../../lib/sklonenie'


ChartJS.register(...registerables, ChartDataLabels)

export const ChartJSBarKPI: FC<ChartJSBarKPIProps> = ({data: {data, units, name}}) => {
	const {colorMode} = useColorMode()
	const [blackA100, whiteA300, gray800] = useToken('colors', ['blackAlpha.100', 'whiteAlpha.300', 'gray.800'])
	const gridColor = colorMode === 'light' ? blackA100 : whiteA300
	const textColor = colorMode === 'light' ? gray800 : 'white'

	const options: ChartOptions<'bar'> = {
		locale: 'ru-RU',
		plugins: {
			datalabels: {
				display: true,
				font: {size: 16},
				color: 'white',
				formatter: value => {
					if (units === 'дни')
						return morphDays(value.y)

					return `${value.y} ${units}`
				}
			},
			tooltip: { enabled: false },
			title: {
				text: name,
				display: true,
				fullSize: true,
				font: {size: 20},
				padding: {bottom: 20},
				color: textColor,
			},
			legend: {
				labels: {color: textColor},
				position: 'bottom'
			},
		},
		scales: {
			x: {
				grid: {color: gridColor},
				ticks: {color: textColor}
			},
			y: {
				grid: {color: gridColor},
				ticks: {color: textColor}
			},
		},
		elements: {
			bar: { borderRadius: 10 }
		},
	}
	const mediumPoint = (data[1].y + data[0].y) / 2
	const newData: ChartData<'bar', {x: number, y: number}[]> = {
		datasets: [
			{
				label: 'Исходное значение',
				data: [{x: 1, y: data[0].y}],
				backgroundColor: 'rgba(255, 99, 132)',
			},
			{
				label: 'Текущее значение',
				data: [{x: 1, y: Math.round(mediumPoint)}],
				backgroundColor: 'rgb(75, 192, 192)',
			},
			{
				label: 'Целевой показатель',
				data: [{x: 1, y: data[1].y}],
				backgroundColor: 'rgba(53, 162, 235)',
			},
		]
	}

	const chartRef = useRef<any>(null!)
	useEffect(() => {
		return () => {
			chartRef.current = null
		}
	}, [])

	return (
		<Chart type='bar' ref={chartRef} options={options} data={newData}/>
	)
}