import {Flex, Grid, Heading, HStack, IconButton, Tag, TagLabel, TagLeftIcon, Tooltip} from '@chakra-ui/react'
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
					<Heading size='md'>{name}</Heading>
					<IconButton
						icon={<EditIcon/>}
						onClick={() => onOpen(true)}
						aria-label='Открыть карту проекта'
					/>
				</HStack>
				<Tag variant='outline' colorScheme='cyan' borderRadius='full' w='max-content'>{status}</Tag>
			</Grid>
			<HStack>
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

				<Tooltip label='Методолог'>
					<Tag>
						<TagLeftIcon as={BiCodeAlt}/>
						<TagLabel>{methodologyOwner}</TagLabel>
					</Tag>
				</Tooltip>
			</HStack>
		</Flex>
	)
}
