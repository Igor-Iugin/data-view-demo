import {FC, useMemo} from 'react'

import {InfoStructure, PCardProps} from './PCard-props'
import {
	Center,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	Stack,
	StackProps,
	Table,
	TableContainer,
	Tag,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorMode
} from '@chakra-ui/react'
import {useProject} from '../../Project'


const SectionBlock: FC<StackProps> = ({children, ...props}) => {
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
		<Stack p={3} spacing={4} borderRadius='md' border='1px solid' borderColor={bdColor} {...props}>
			{children}
		</Stack>
	)
}

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
	const {goals, justification, tasks, plannedEffect} = useProject()
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
		<SimpleGrid as='section' columns={2} row={2} gap={7}>
			<Info/>
			<SectionBlock>
				<Heading fontSize='2xl'>2. Обоснование выбора</Heading>
				<Stack pl={4}>
					{justification.map(item => <Text key={item}>{item}</Text>)}
				</Stack>
			</SectionBlock>

			<SectionBlock justifyContent='space-between'>
				<Heading fontSize='2xl'>3. Цели и плановый эффект</Heading>
				<Text pl={4}>{goals}</Text>
				<TableContainer border='1px' borderColor={bdColor} borderRadius='xl'>
					<Table>
						<Thead>
							<Tr>
								<Th>Наименование цели</Th>
								<Center as={Th}>ЕИ</Center>
								<Th isNumeric>Исходное значение</Th>
								<Th isNumeric>Целевой показатель</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>{plannedEffect.name}</Td>
								<Td>{plannedEffect.units}</Td>
								<Td isNumeric>{plannedEffect.initialValue}</Td>
								<Td isNumeric>{plannedEffect.aimedValue}</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
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
