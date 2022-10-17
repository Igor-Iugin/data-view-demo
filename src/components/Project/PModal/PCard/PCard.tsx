import {FC, ReactNode, useMemo} from 'react'

import {InfoStructure, PCardProps} from './PCard-props'
import {Flex, Heading, HStack, SimpleGrid, Stack, Tag, Text, useColorMode} from '@chakra-ui/react'
import {useProject} from '../../Project'


const SectionBlock: FC<{children: ReactNode}> = ({children}) => {
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
	<Stack p={3} spacing={5} borderRadius='md' border='1px solid' borderColor={bdColor}>
		{children}
	</Stack>
)}

const InfoSection: FC<InfoStructure> = ({title, info, type}) => {
	const Content = () => {
		switch (type) {
			case 'array':
				return (
					<Flex flexWrap='wrap' gap={3}>
						{info.map(item => <Tag key={item} w='max-content' whiteSpace='normal'>{item}</Tag>)}
					</Flex>
				)
			case 'condition':
				return (
					<Flex alignItems='center' flexWrap='wrap' gap={1}>
						<Text display='flex' gap={1}>
							<Tag size='sm' w='34px'>ОТ</Tag> {info.from}
						</Text>
						<Text display='flex' gap={1}>
							<Tag size='sm' w='34px'>ДО</Tag> {info.to}
						</Text>
					</Flex>
				)
			case 'text':
				return (
					<Tag>{info}</Tag>
				)
		}
	}
	return (
		<HStack alignItems='start'>
			<Heading as='h3' fontSize='lg' whiteSpace='nowrap' mb={2}>{title}:</Heading>
			<Content/>
		</HStack>
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
		<SectionBlock>
			<Heading fontSize='2xl'>1. Общая информация</Heading>

			<Stack direction='column' spacing={4} pl={4}>
				{structure.map(item => (
					<InfoSection key={item.title} {...item}/>
				))}
			</Stack>
		</SectionBlock>
	)
}

export const PCard: FC<PCardProps> = () => {
	const {goals, justification, tasks} = useProject()
	return (
		<SimpleGrid as='section' columns={2} row={2} gap={7}>
			<Info/>
			<SectionBlock>
				<Heading fontSize='2xl'>2. Обоснование выбора</Heading>
				{justification.map(item => <Text key={item} pl={4}>{item}</Text>)}
			</SectionBlock>

			<SectionBlock>
				<Heading fontSize='2xl'>3. Цели и плановый эффект</Heading>
				<Text pl={4}>{goals}</Text>
			</SectionBlock>

			<SectionBlock>
				<Heading fontSize='2xl'>4. Ключевые события</Heading>
				{tasks.map((task) => {
					const {name, start, end} = task
					if (task.dependencies) return null
					return (
						<Flex pl={4} gap={1} key={`${start}${end}`}>
							{name}:
							<Flex pl={2} gap={2}>
								<Tag>{start.toLocaleDateString()}</Tag> —
								<Tag>{end.toLocaleDateString()}</Tag>
							</Flex>
						</Flex>
					)
				})}
			</SectionBlock>
		</SimpleGrid>
	)
}
