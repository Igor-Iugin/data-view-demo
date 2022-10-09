import {FC} from 'react'

import {SearchProps} from './Search-props'
import {Flex, IconButton, Input, Select} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'


export const Search: FC<SearchProps> = ({columns}) => {
	return (
		<Flex as='form'>
			<Select variant='outline' borderTopRightRadius='0' borderBottomRightRadius='0'>
				<option key='all' value='all'>Все</option>
				{columns.map(col => (
					<option key={col.accessorKey} value={col.accessorKey}>{col.header}</option>
				))}
			</Select>
			<Input borderRadius='0' borderLeft='0' borderRight='0'/>
			<IconButton
				icon={<SearchIcon/>}
				type='submit'
				variant='outline'
				borderTopLeftRadius='0'
				borderBottomLeftRadius='0'
				aria-label='Поиск'
			/>
		</Flex>
	)
}
