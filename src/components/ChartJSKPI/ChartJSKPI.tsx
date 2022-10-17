import {FC, useEffect, useRef} from 'react'
import {Chart as ChartJS, ChartOptions, registerables} from 'chart.js'
import {Chart} from 'react-chartjs-2'

import {ChartJSKPIProps} from './ChartJSKPI-props'
import {useColorMode, useToken} from '@chakra-ui/react'


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

ChartJS.register(...registerables)

export const ChartJSKPI: FC<ChartJSKPIProps> = ({data}) => {
	const {colorMode} = useColorMode()
	const [blackA100, whiteA300, gray800] = useToken('colors', ['blackAlpha.100', 'whiteAlpha.300', 'gray.800'])
	const gridColor = colorMode === 'light' ? blackA100 : whiteA300
	const textColor = colorMode === 'light' ? gray800 : 'white'
	const options: ChartOptions<'line'> = {
		locale: 'ru-RU',
		plugins: {
			datalabels: {
				display: true,
				font: {size: 16},
				color: 'white',
				formatter: value => value.y
			},
			tooltip: {enabled: false},
			title: {
				text: 'Время, затраченное на предоставление услуги',
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
				grid: {display: false},
				ticks: {color: textColor}
			},
			y: {
				grid: {color: gridColor},
				ticks: {color: textColor}
			},
		},
		elements: {
			bar: {borderRadius: 10}
		},
	}
	const newData = {
		labels: monthNames,
		datasets: [{
			label: 'Время',
			data: data,
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		}]
	}

	const chartRef = useRef<any>(null!)
	useEffect(() => {
		return () => {
			chartRef.current = null
		}
	}, [])

	return (
		<Chart type='line' ref={chartRef} options={options} data={newData}/>
	)
}
