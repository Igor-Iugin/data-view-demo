import {FC, useEffect, useRef} from 'react'
import {Chart as ChartJS, ChartOptions, registerables} from 'chart.js'
import {Chart} from 'react-chartjs-2'

import {ChartJSKPIProps} from './ChartJSKPI-props'


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
const options: ChartOptions<'line'> = {
	responsive: true,
	locale: 'ru-RU'
}

export const ChartJSKPI: FC<ChartJSKPIProps> = ({data}) => {
	const chartRef = useRef<any>(null!)
	const newData = {
		labels: monthNames,
		datasets: [{
			label: 'Время, затраченное на предоставление услуги',
			data: data,
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		}]
	}

	useEffect(() => {
		return () => {
			chartRef.current = null
		}
	}, [])

	return (
		<Chart type='line' ref={chartRef} options={options} data={newData}/>
	)
}
