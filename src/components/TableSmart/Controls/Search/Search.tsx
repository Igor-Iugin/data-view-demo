import {FC} from 'react'

import {SearchFields, SearchProps} from './Search-props'
import {Flex, IconButton, Input, Select} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {SubmitHandler, useForm} from 'react-hook-form'


export const Search: FC<SearchProps> = ({columns, table}) => {
	const {register, handleSubmit} = useForm<SearchFields>()
	const onSubmit: SubmitHandler<SearchFields> = ({column, request}) => {
		if (column === 'all') {
			return table.setGlobalFilter(request)
		}
		table.getColumn(column).setFilterValue(request)
	}

	return (
		<Flex as='form' onSubmit={handleSubmit(onSubmit)}>
			<Select
				{...register('column')}
				variant='outline'
				borderTopRightRadius='0'
				borderBottomRightRadius='0'
			>
				<option key='all' value='all'>Все</option>
				{columns.map(col => (
					<option key={col.accessorKey} value={col.accessorKey}>{col.header}</option>
				))}
			</Select>
			<Input
				{...register('request')}
				borderRadius='0'
				borderLeft='0'
				borderRight='0'
			/>
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
