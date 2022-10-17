import {Task} from 'gantt-task-react'

const [good, norm, bad] = ['#68D391', 'orange', 'crimson']
const today = new Date()

export function getTaskColor(task: Task) {
	const {progress, end} = task
	if (today > end && progress !== 100) {
		task.styles = {
			progressColor: bad
		}
	}
	if (today < end && progress !== 100) {
		task.styles = {
			progressColor: norm
		}
	}
	if (progress === 100) {
		task.styles = {
			progressColor: good
		}
	}
	return task
}
