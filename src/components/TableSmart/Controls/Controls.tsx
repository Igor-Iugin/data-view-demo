import {FC} from 'react'

import {ControlsProps} from './Controls-props'
import {Button, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure} from '@chakra-ui/react'
import {Search} from './Search'
import {ChevronDownIcon} from '@chakra-ui/icons'
import {TableModal} from '../TableModal'


export const Controls: FC<ControlsProps> = ({columns, table, setData, data}) => {
	const {isOpen, onOpen, onClose} = useDisclosure()
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
			<Button onClick={onOpen}>Добавить запись</Button>
			<Button colorScheme='blue'>Сохранить</Button>
			<TableModal isOpen={isOpen} onClose={onClose} columns={columns} table={table}/>
		</Stack>
	)
}
