import {FC, useMemo} from 'react'

import {PCardProps} from './PCard-props'
import {Flex, Grid, Heading, SimpleGrid, Stack, Tag, Text} from '@chakra-ui/react'
import {useProject} from '../../Project'


const InfoSection = ({title, info}: { title: string, info: string }) => (
	<Stack direction='column'>
		<Heading as='h3' fontSize='lg'>{title}</Heading>
		<Text pl={4}>{info}</Text>
	</Stack>
)

const Info = () => {
	const {company, client, zone, conditions, director, methodologyOwner, owner, team} = useProject()
	const structure: Record<string, string>[] = useMemo(() => [
		{title: 'Предприятие', info: company},
		{title: 'Заказчик', info: client},
		{title: 'Периметр', info: zone},
		{title: 'Рамки', info: conditions},
		{title: 'Руководитель', info: director},
		{title: 'Методолог', info: methodologyOwner},
		{title: 'Владелец процесса', info: owner},
		{title: 'Команда', info: team},
	], [client, company, conditions, director, methodologyOwner, owner, team, zone])

	return (
		<Stack direction='column' spacing={5}>
			<Heading fontSize='2xl'>Общая информация</Heading>

			<Stack direction='column' spacing={4}>
				{structure.map(({title, info}) => (
					<InfoSection key={title} title={title} info={info}/>
				))}
			</Stack>
		</Stack>
	)
}

export const PCard: FC<PCardProps> = () => {
	const {goals, justification, tasks} = useProject()
	return (
		<SimpleGrid as='section' columns={2}>
			<Stack direction='column' spacing={4}>
				<Stack>
					<Heading fontSize='2xl'>Обоснование выбора</Heading>
					<Text pl={4}>{justification}</Text>
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
