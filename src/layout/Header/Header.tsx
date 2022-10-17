import {FC} from 'react'

import {Button, Center, Flex, Heading, IconButton, useColorMode, useDisclosure} from '@chakra-ui/react'
import {CalendarIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import {UserMenu} from './UserMenu'

import {HeaderProps} from './Header-props'
import {Menu} from './Menu'


export const Header: FC<HeaderProps> = () => {
	const {colorMode, toggleColorMode} = useColorMode()
	const {onClose, isOpen, onOpen} = useDisclosure()
	return (
		<Flex as={'header'} p={4} justifyContent={'space-between'}>
			<Center gap='4'>
				<IconButton
					aria-label='Меню'
					onClick={onOpen}
					icon={<HamburgerIcon/>}
				/>
				<Heading as='h1' size='md'>Система управления проектами ПСР</Heading>
				<Menu {...{onClose, isOpen}}/>
			</Center>
			<Center gap='4'>
				<IconButton
					variant='ghost'
					aria-label='Изменить тему'
					onClick={toggleColorMode}
					icon={colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
				/>
				<Button variant='ghost' leftIcon={<CalendarIcon/>}>
					Новости
				</Button>
				<UserMenu/>
			</Center>
		</Flex>
	)
}
