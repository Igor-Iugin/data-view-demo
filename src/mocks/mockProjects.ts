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

export interface IProjectEvent {
	name: string
	date: IEventDate
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
	events: IProjectEvent[]
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
				events: [
					{
						name: 'Открытие и подготовка ПСР-проекта',
						date: {from: new Date('2021-12-01'), to: new Date('2021-12-24')}
					},
					{
						name: 'Диагностика и целевое состояние',
						date: {from: new Date('2022-01-10'), to: new Date('2022-03-21')}
					},
					{
						name: 'Внедрение улучшений',
						date: {from: new Date('2022-03-21'), to: new Date('2022-12-19')}
					},
					{
						name: 'Закрепление результатов и закрытие проекта',
						date: {from: new Date('2022-12-19'), to: new Date('2022-12-30')}
					},
				],

				subprojects: []
			}
		]
	},
	{
		name: 'ЦОИ',
		projects: []
	}
]

export const mockProjectsData = []