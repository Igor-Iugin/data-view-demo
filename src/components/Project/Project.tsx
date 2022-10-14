import {FC} from 'react'

import {ProjectProps} from './Project-props'
import {Flex, Grid, Heading, HStack, Tag, TagLabel, TagLeftIcon, Tooltip} from '@chakra-ui/react'
import {MdApartment, MdBusinessCenter} from 'react-icons/md'
import {BiCodeAlt} from 'react-icons/bi'


const PHeader = () => (
	<Flex justifyContent='space-between' wrap={'wrap'}>
		<Flex as={Heading} gap={2} alignItems='center' size='md'>
			Внедрение целевых моделей Жизненных ситуаций
			<Tag variant='outline' colorScheme='cyan' borderRadius='full'>В работе</Tag>
		</Flex>
		<HStack>
			<Tooltip label='Заказчик'>
				<Tag>
					<TagLeftIcon as={MdBusinessCenter}/>
					<TagLabel>Никитин Г.С.</TagLabel>
				</Tag>
			</Tooltip>

			<Tooltip label='Предприятие'>
				<Tag>
					<TagLeftIcon as={MdApartment}/>
					<TagLabel>Правительство НО</TagLabel>
				</Tag>
			</Tooltip>

			<Tooltip label='Методолог'>
				<Tag>
					<TagLeftIcon as={BiCodeAlt}/>
					<TagLabel>Мещеряков А.И.</TagLabel>
				</Tag>
			</Tooltip>
		</HStack>
	</Flex>
)

export const Project: FC<ProjectProps> = () => {
	return (
		<Grid gap={4}>
			<PHeader/>
		</Grid>
	)
}
