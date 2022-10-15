import {Task} from 'gantt-task-react'

export type ProjectStatuses = 'В работе'
	| 'Подготовка'
	| 'Не в работе'
	| 'Отменён'
	| 'Выполнен'
	| 'Согласование'

export interface IPlannedEffect {
	name: string
	units: string
	aimedValue: number
	initialValue: number,
	data: {x: Date, y: number}[]
}

export interface ICondition {
	from: string
	to: string
}

export interface IProject {
	owner: string[]
	plannedEffect: IPlannedEffect
	status: ProjectStatuses
	director: string[]
	team: string[]
	zone: string[]
	name: string
	client: string
	methodologyOwner: string[]
	company: string
	justification: string[]
	conditions: ICondition
	tasks: Task[]
	goals: string
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
				zone: [
					'ГБУЗ «Нижегородский областной онкологический диспансер»',
					'ГБУЗ «Городская поликлиника №4»',
					'МАДОУ',
					'Министерство социальной защиты Нижегородской области'
				],
				conditions: {
					from: 'заказа на услугу',
					to: 'получения'
				},
				director: ['Руководители учреждений социальной инфраструктуры'],
				methodologyOwner: ['Мещеряков А.И.'],
				owner: ['Бетин А.А.'],
				team: ['Руководители и сотрудники учреждений социальной инфраструктуры, ОИВ и ОМСУ'],

				// Цели и плановый эффект
				goals: 'сокращение сроков получения услуг',
				plannedEffect: {
					name: 'Время, затраченное на предоставление услуги',
					units: 'дни',
					initialValue: 35,
					aimedValue: 17,
					data: []
				},

				// Обоснование выбора
				justification: [
					'Длительные сроки получения услуг',
					'Низкое качество и информированность населения'
				],

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
				]
			},
			{
				status: 'Выполнен',
				name: 'Оптимизация процесса получения льготного лекарственного препарата',
				company: 'Правительство НО',
				client: 'Никитин Г. С.',
				zone: [
					'ГБУЗ НО "Борская ЦРБ"',
					'ГП НОФ (Аптечная сеть)',
					'ГБУЗ НО "Городская поликлиника №4 Канавинского района"',
					'ГБУЗ НО "Городская поликлиника №7 Нижегородского района"'
				],
				conditions: {
					from: 'Момента обращения в поликлинику',
					to: 'Получения лекарственного препарата в аптеке'
				},
				director: [
					'Д.В. Мелик',
					'Гусейнов',
					'Министр здравоохранения Нижегородской области'
				],
				methodologyOwner: [
					'Мещеряков А.И.',
					'Выриков Д.В.',
					'Шегуров Я.С.'
				],
				owner: [
					'Д.В. Мелик',
					'Гусейнов',
					'Министр здравоохранения Нижегородской области'
				],
				team: [
					'Смирнов А.В.',
					'Пудова И.А.',
					'Овчинникова Е.А.',
					'Кулаков А.'
				],

				goals: '',
				plannedEffect: {
					name: 'Доля рецептов выписанных с использованием РСЛО',
					units: '%',
					initialValue: 2,
					aimedValue: 40,
					data: [
						{x: new Date('2022-01-27'), y: 2},
						{x: new Date('2022-02-14'), y: 8},
						{x: new Date('2022-02-27'), y: 5},
						{x: new Date('2022-03-6'), y: 22},
						{x: new Date('2022-03-30'), y: 28},
						{x: new Date('2022-04-15'), y: 25},
						{x: new Date('2022-05-01'), y: 30},
						{x: new Date('2022-05-15'), y: 35},
						{x: new Date('2022-05-31'), y: 40},
					]
				},

				justification: [
					'Потеря бум. бланка',
					'Разрывы в лекарственной терапии'
				],

				tasks: [
					{
						id: '1',
						name: 'Подписание карточки проекта',
						start: new Date('2022-01-13'),
						end: new Date('2022-01-20'),
						type: 'task',
						progress: 100
					},
					{
						id: '2',
						name: 'Подготовка карты текущего состояния',
						start: new Date('2022-01-14'),
						end: new Date('2022-01-22'),
						type: 'task',
						progress: 100,
						hideChildren: true
					},
					{
						id: '3',
						name: 'Подготовка карты идеального и целевого состояния',
						start: new Date('2022-01-19'),
						end: new Date('2022-05-26'),
						type: 'task',
						progress: 100,
						dependencies: ['2']
					},
					{
						id: '4',
						name: 'Проработка плана',
						start: new Date('2022-01-27'),
						end: new Date('2022-02-10'),
						type: 'task',
						progress: 100,
						hideChildren: true
					},
					{
						id: '5',
						name: 'Проведение Kick - off',
						start: new Date('2022-02-10'),
						end: new Date('2022-02-14'),
						type: 'task',
						progress: 100,
						dependencies: ['4']
					},
					{
						id: '6',
						name: 'Внедрение мероприятий',
						start: new Date('2022-02-15'),
						end: new Date('2022-05-25'),
						type: 'task',
						progress: 100,
						dependencies: ['4']
					},
					{
						id: '7',
						name: 'Оценка внедряемых решений',
						start: new Date('2022-03-30'),
						end: new Date('2022-05-22'),
						type: 'task',
						progress: 100
					},
				]
			}
		]
	},
	{
		name: 'ЦОЗ',
		projects: []
	},
	{
		name: 'Эффективный регион',
		projects: []
	},
	{
		name: 'ФМБА',
		projects: []
	},
	{
		name: 'Внепроектные задачи',
		projects: []
	},
]