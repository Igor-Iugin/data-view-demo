import {
	Flex,
	Grid,
	Heading,
	HStack,
	IconButton,
	Link,
	Stack,
	Tag,
	TagLabel,
	TagLeftIcon,
	Tooltip
} from '@chakra-ui/react'
import {MdApartment, MdBusinessCenter} from 'react-icons/md'
import {BiCodeAlt} from 'react-icons/bi'
import {useProject} from '../Project'
import {EditIcon} from '@chakra-ui/icons'


export const PHeader = () => {
	const {name, status, client, company, methodologyOwner, onOpen} = useProject()
	return (
		<Flex justifyContent='space-between' alignItems='start' wrap={'wrap'}>
			<Grid gap={2} alignItems='center'>
				<HStack>
					<Heading as={Link} size='md' onClick={() => onOpen(true)}>{name}</Heading>
					<IconButton
						icon={<EditIcon/>}
						onClick={() => onOpen(true)}
						aria-label='Открыть карту проекта'
					/>
				</HStack>
				<Tag variant='outline' colorScheme='cyan' borderRadius='full' w='max-content'>{status}</Tag>
			</Grid>
			<HStack alignItems='start'>
				<Tooltip label='Заказчик'>
					<Tag>
						<TagLeftIcon as={MdBusinessCenter}/>
						<TagLabel>{client}</TagLabel>
					</Tag>
				</Tooltip>

				<Tooltip label='Предприятие'>
					<Tag>
						<TagLeftIcon as={MdApartment}/>
						<TagLabel>{company}</TagLabel>
					</Tag>
				</Tooltip>

				<Stack>
					{methodologyOwner.map(name => (
						<Tooltip key={name} label='Методолог'>
							<Tag>
								<TagLeftIcon as={BiCodeAlt}/>
								<TagLabel>{name}</TagLabel>
							</Tag>
						</Tooltip>
					))}
				</Stack>
			</HStack>
		</Flex>
	)
}
