import {FC} from 'react'

import {MenuProps} from './Menu-props'
import {Link as RLink, LinkProps} from 'react-router-dom'
import {Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay} from '@chakra-ui/react'


const MenuButton: FC<LinkProps> = (props) => (
// @ts-ignore
	<Button
		as={RLink}
		display='grid'
		borderRadius={0}
		borderBottom='1px solid #00B5D8'
		{...props}
	/>
)

export const Menu: FC<MenuProps> = ({onClose, isOpen}) => {
	return (
		<Drawer onClose={onClose} isOpen={isOpen} placement='left'>
			<DrawerOverlay/>
			<DrawerContent>
				<DrawerBody p={0}>
					<MenuButton to='/'>Главная</MenuButton>
					<MenuButton to='/table'>Таблица</MenuButton>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}
