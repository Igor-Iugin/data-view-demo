import {FC} from 'react'
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js'
import {Line} from 'react-chartjs-2'

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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
}

export const ChartJSKPI: FC<ChartJSKPIProps> = ({data}) => {
	const newData = {
		labels: monthNames,
		datasets: [{
			label: 'Статистика',
			data: data
		}]
	}

	return (
		<Line options={options} data={newData}/>
	)
}
