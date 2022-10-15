import {Task} from 'gantt-task-react'

export type ProjectStatuses = 'В работе' | 'Подготовка' | 'Не в работе' | 'Отменён' | 'Выполнен' | 'Согласование'

export interface IPlannedEffect {
	name: string
	units: string
	aimedValue: number
	initialValue: number
}

export interface IEventDate {
	from: Date
	to: Date
}

export interface IProject {
	owner: string
	plannedEffect: IPlannedEffect[]
	status: ProjectStatuses
	director: string
	team: string
	zone: string
	name: string
	client: string
	methodologyOwner: string
	company: string
	justification: string
	conditions: string
	tasks: Task[]
	goals: string
	subprojects: IProject[]
}

export interface IMockProject {
	name: string
	projects: IProject[]
}

export const mockProjects: IMockProject[] = [
	{
		name: 'АСИ',
		projects: [
			{
				status: 'В работе',
				// Общая информация по проекту
				name: 'Внедрение целевых моделей Жизненных ситуаций',
				company: 'Правительство НО',
				client: 'Никитин Г.С.',
				zone: 'ГБУЗ «Нижегородский областной онкологический диспансер» и ГБУЗ «Городская поликлиника №4», МАДОУ, Министерство социальной защиты Нижегородской области',
				conditions: 'от заказа на услугу до ее получения',
				director: 'руководители учреждений социальной инфраструктуры',
				methodologyOwner: 'Мещеряков А.И.',
				owner: 'Бетин А.А.',
				team: 'руководители и сотрудники учреждений социальной инфраструктуры, ОИВ и ОМСУ',

				// Цели и плановый эффект
				goals: 'сокращение сроков получения услуг',
				plannedEffect: [{
					name: 'Время, затраченное на предоставление услуги',
					units: 'дни',
					initialValue: 35,
					aimedValue: 17
				}],

				// Обоснование выбора
				justification: 'Длительные сроки получения услуг, низкое качество и информированность населения',

				// Ключевые события
				tasks: [
					{
						id: '1',
						name: 'Открытие и подготовка ПСР-проекта',
						start: new Date('2021-12-01'),
						end: new Date('2021-12-24'),
						type: 'task',
						progress: 100
					},
					{
						id: '2',
						name: 'Диагностика и целевое состояние',
						start: new Date('2022-01-10'),
						end: new Date('2022-03-21'),
						type: 'task',
						progress: 80,
						hideChildren: false
					},
					{
						id: '3',
						name: 'Внедрение улучшений',
						start: new Date('2022-03-21'),
						end: new Date('2022-12-19'),
						type: 'task',
						progress: 60,
						dependencies: ['2']
					},
					{
						id: '4',
						name: 'Закрепление результатов и закрытие проекта',
						start: new Date('2022-12-19'),
						end: new Date('2022-12-30'),
						type: 'task',
						progress: 30
					},
				],

				subprojects: []
			}
		]
	},
	// {
	// 	name: 'ЦОИ',
	// 	projects: []
	// }
]