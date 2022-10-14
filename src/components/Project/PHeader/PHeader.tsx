import {Flex, Grid, Heading, HStack, Tag, TagLabel, TagLeftIcon, Tooltip, VisuallyHidden} from '@chakra-ui/react'
import {MdApartment, MdBusinessCenter} from 'react-icons/md'
import {BiCodeAlt} from 'react-icons/bi'
import {useProject} from '../Project'


export const PHeader = () => {
	const {name, status, client, company, methodologyOwner} = useProject()
	return (
		<Flex justifyContent='space-between' alignItems='start' wrap={'wrap'}>
			<Grid as={Heading} gap={2} alignItems='center' size='md'>
				{name}
				<VisuallyHidden>. Статус</VisuallyHidden>
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
