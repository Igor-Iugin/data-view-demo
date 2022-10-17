import {FC, useEffect, useRef} from 'react'
import {Chart as ChartJS, ChartOptions, registerables} from 'chart.js'
import {Chart} from 'react-chartjs-2'

import {ChartJSKPIProps} from './ChartJSKPI-props'


ChartJS.register(...registerables)

const options: ChartOptions<'bar'> = {
	responsive: true,
	elements: {
		bar: {
			borderRadius: 10
		},
	},
	locale: 'ru-RU'
}

export const ChartJSBarKPI: FC<ChartJSKPIProps> = ({data}) => {
	const newData = {
		datasets: [
			{
				label: 'Исходное значение',
				data: [data[0]],
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
			{
				label: 'Целевой показатель',
				data: [data[1]],
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			}
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
