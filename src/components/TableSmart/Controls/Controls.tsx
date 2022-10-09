import {FC} from 'react'

import {ControlsProps} from './Controls-props'
import {Button, Menu, MenuButton, MenuItem, MenuList, Stack} from '@chakra-ui/react'
import {Search} from './Search'
import {ChevronDownIcon} from '@chakra-ui/icons'


export const Controls: FC<ControlsProps> = ({columns, table}) => {
	return (
		<Stack spacing={3} direction='row'>
			<Search {...{columns, table}}/>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
					Действия
				</MenuButton>
				<MenuList>
					<MenuItem>Изменить</MenuItem>
					<MenuItem>Скачать отчёт</MenuItem>
					<MenuItem>Удалить</MenuItem>
				</MenuList>
			</Menu>
			<Button>Добавить запись</Button>
			<Button colorScheme='blue'>Сохранить</Button>
		</Stack>
	)
}
