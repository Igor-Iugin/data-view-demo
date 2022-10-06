import {FC} from 'react'

import {Button, Center, Flex, Heading} from '@chakra-ui/react'
import {CalendarIcon, HamburgerIcon} from '@chakra-ui/icons'
import {UserMenu} from './UserMenu'

import {HeaderProps} from './Header-props'


export const Header: FC<HeaderProps> = () => {

	return (
		<Flex as={'header'} p={4} justifyContent={'space-between'}>
			<Center gap='4'>
				<Button><HamburgerIcon/></Button>
				<Heading as='h1' size='md'>Система управления проектами ПСР</Heading>
			</Center>
			<Center gap='4'>
				<Button variant='ghost' gap='2'><CalendarIcon/> Новости</Button>
				<UserMenu/>
			</Center>
		</Flex>
	)
}
