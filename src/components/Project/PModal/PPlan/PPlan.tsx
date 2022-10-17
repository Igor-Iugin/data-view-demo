import {FC} from 'react'

import {PPlanProps} from './PPlan-props'
import {StyledGantt} from '../../../'
import {useProject} from '../../Project'
import {Task, ViewMode} from 'gantt-task-react'
import {Center} from '@chakra-ui/react'
import {getTaskColor} from '../../../StyledGantt/utils/getTaskColor'


function getStartEndDateForProject(tasks: Task[], projectId: string) {
	const projectTasks = tasks.filter(t => t.project === projectId)
	let start = projectTasks[0].start
	let end = projectTasks[0].end

	for (let i = 0; i < projectTasks.length; i++) {
		const task = projectTasks[i]
		if (start.getTime() > task.start.getTime()) {
			start = task.start
		}
		if (end.getTime() < task.end.getTime()) {
			end = task.end
		}
	}
	return [start, end]
}

export const PPlan: FC<PPlanProps> = () => {
	const {tasks, setTasks} = useProject()
	const handleTaskChange = (task: Task) => {
		let newTasks = tasks.map(t => (t.id === task.id ? getTaskColor(task) : t))
		if (task.project) {
			const [start, end] = getStartEndDateForProject(newTasks, task.project)
			const project = newTasks[newTasks.findIndex(t => t.id === task.project)]
			const styles = getTaskColor(task).styles
			if (
				project.start.getTime() !== start.getTime() ||
				project.end.getTime() !== end.getTime()
			) {
				const changedProject = {...project, start, end, styles}
				newTasks = newTasks.map(t =>
					t.id === task.project ? changedProject : t
				)
			}
		}
		setTasks(newTasks)
	}

	const handleTaskDelete = (task: Task) => {
		const conf = window.confirm(`Подтвердите удаление задачи "${task.name}" ?`)
		if (conf) {
			setTasks(tasks.filter(t => t.id !== task.id))
		}
		return conf
	}

	const handleProgressChange = async (task: Task) => {
		setTasks(tasks.map(t => (
			t.id === task.id
				? getTaskColor(task)
				: t
		)))
	}

	const handleExpanderClick = (task: Task) => {
		setTasks(tasks.map(t => (t.id === task.id ? task : t)))
	}

	return (
		<Center>
			<StyledGantt
				tasks={tasks}
				viewMode={ViewMode.Month}
				onDateChange={handleTaskChange}
				onDelete={handleTaskDelete}
				onProgressChange={handleProgressChange}
				onExpanderClick={handleExpanderClick}
			/>
		</Center>
	)
}
