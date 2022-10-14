import {FC} from 'react'

import {Avatar, Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'

import {UserMenuProps} from './UserMenu-props'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {useAuth} from '../../../Auth'
import {useNavigate} from 'react-router'


export const UserMenu: FC<UserMenuProps> = () => {
	const {user, signout} = useAuth()
	const navigate = useNavigate()
	const handleLogOut = () => signout(() => navigate('/login'))

	return (
		<Menu>
			<MenuButton
				as={Button}
				leftIcon={<Avatar size='xs' name={user?.userName}/>}
				rightIcon={<ChevronDownIcon />}
			>
				{user?.userName}
			</MenuButton>
			<MenuList>
				<MenuItem onClick={handleLogOut}>Выход</MenuItem>
			</MenuList>
		</Menu>
	)
}
