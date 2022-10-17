export interface ChartJSKPIProps {
	data: {
		x: number | Date | string
		y: number
	}[]
}

export interface ChartJSBarKPIProps {
	data: {
		name: string
		units: string
		data: {
			y: number
		}[]
	}
}
