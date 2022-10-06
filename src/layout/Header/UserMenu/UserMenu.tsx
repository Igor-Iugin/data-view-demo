import {FC} from 'react'

import {Avatar, Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'

import {UserMenuProps} from './UserMenu-props'
import {ChevronDownIcon} from '@chakra-ui/icons'


export const UserMenu: FC<UserMenuProps> = () => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				leftIcon={<Avatar size='xs' name='user1242'/>}
				rightIcon={<ChevronDownIcon />}
			>
				user1242
			</MenuButton>
			<MenuList>
				<MenuItem>Настройки</MenuItem>
				<MenuItem>Выход</MenuItem>
			</MenuList>
		</Menu>
	)
}
