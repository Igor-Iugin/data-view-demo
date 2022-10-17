import {FC} from 'react'

import {NavMenuProps} from './NavMenu-props'
import {Link} from 'react-router-dom'
import {IconButton, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'


export const NavMenu: FC<NavMenuProps> = () => {
	return (
		<Menu>
			<MenuButton as={IconButton} icon={<HamburgerIcon/>}/>
			<MenuList>
				<MenuItem as={Link} to='/'>
					Главная
				</MenuItem>
				<MenuItem as={Link} to='/table'>
					Таблица
				</MenuItem>
			</MenuList>
		</Menu>
	)
}
