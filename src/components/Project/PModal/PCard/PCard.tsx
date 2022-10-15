import {FC, useMemo} from 'react'

import {InfoStructure, PCardProps} from './PCard-props'
import {Flex, Grid, Heading, SimpleGrid, Stack, Tag, Text} from '@chakra-ui/react'
import {useProject} from '../../Project'


const InfoSection: FC<InfoStructure> = ({title, info, type}) => {
	const Content = () => {
		switch (type) {
			case 'array':
				return (
					<Stack>
						{info.map(item => <Tag>{item}</Tag>)}
					</Stack>
				)
			case 'condition':
				return (
					<Grid gap={2}>
						<p><Tag size='sm'>С</Tag> {info.from}</p>
						<p><Tag>ДО</Tag> {info.to}</p>
					</Grid>
				)
			case 'text':
				return (
					<Text pl={4}>{info}</Text>
				)
		}
	}
	return (
		<Stack direction='column'>
			<Heading as='h3' fontSize='lg'>{title}</Heading>
			<Content/>
		</Stack>
	)
}

const Info = () => {
	const {company, client, zone, conditions, director, methodologyOwner, owner, team} = useProject()
	const structure: InfoStructure[] = useMemo(() => [
		{title: 'Предприятие', info: company, type: 'text'},
		{title: 'Заказчик', info: client, type: 'text'},
		{title: 'Периметр', info: zone, type: 'array'},
		{title: 'Рамки', info: conditions, type: 'condition'},
		{title: 'Руководитель', info: director, type: 'array'},
		{title: 'Методолог', info: methodologyOwner, type: 'array'},
		{title: 'Владелец процесса', info: owner, type: 'array'},
		{title: 'Команда', info: team, type: 'array'},
	], [client, company, conditions, director, methodologyOwner, owner, team, zone])

	return (
		<Stack direction='column' spacing={5}>
			<Heading fontSize='2xl'>Общая информация</Heading>

			<Stack direction='column' spacing={4}>
				{structure.map(item => (
					<InfoSection key={item.title} {...item}/>
				))}
			</Stack>
		</Stack>
	)
}

export const PCard: FC<PCardProps> = () => {
	const {goals, justification, tasks} = useProject()
	return (
		<SimpleGrid as='section' columns={2}>
			<Stack spacing={4}>
				<Stack>
					<Heading fontSize='2xl'>Обоснование выбора</Heading>
					{justification.map(item => <Text pl={4}>{item}</Text>)}
				</Stack>

				<Stack>
					<Heading fontSize='2xl'>Цели и плановый эффект</Heading>
					<Text pl={4}>{goals}</Text>
				</Stack>

				<Stack>
					<Heading fontSize='2xl'>Ключевые события</Heading>
					{tasks.map(({name, start, end}) => (
						<Grid pl={4} gap={1} key={`${start}${end}`}>
							{name}
							<Flex pl={2} gap={2}>
								<Tag>{start.toLocaleDateString()}</Tag>
								<Tag>{end.toLocaleDateString()}</Tag>
							</Flex>
						</Grid>
					))}
				</Stack>
			</Stack>

			<Info/>
		</SimpleGrid>
	)
}
