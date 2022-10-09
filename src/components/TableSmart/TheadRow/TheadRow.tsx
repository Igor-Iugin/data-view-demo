import {FC} from 'react'

import {TheadRowProps} from './TheadRow-props'
import {DragHandleIcon, TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'
import {Button, Center, Checkbox, IconButton, Th, Tr} from '@chakra-ui/react'
import {flexRender} from '@tanstack/react-table'


export const TheadRow: FC<TheadRowProps> = ({table, group}) => {
	return (
		<Tr>
			<Th>
				<Center
					as={Checkbox}
					isChecked={table.getIsAllRowsSelected()}
					isIndeterminate={table.getIsSomeRowsSelected()}
					onChange={table.getToggleAllRowsSelectedHandler()}
					h='100%'
				/>
			</Th>
			<Th>
				<IconButton
					variant='unstyled'
					cursor='default'
					icon={<DragHandleIcon/>}
					aria-label='Перенести'/>
			</Th>
			{group.headers.map(header => {
				const getSortIcon = () => {
					switch (header.column.getIsSorted()) {
						case 'asc':
							return <TriangleUpIcon/>
						case 'desc':
							return <TriangleDownIcon/>
						default:
							return undefined
					}
				}
				if (header.id === 'checked')
					return (
						<Th key={header.id} p='0'>
							{flexRender(
								header.column.columnDef.header,
								header.getContext(),
							)}
						</Th>
					)

				return (
					<Th key={header.id} p='0'>
						<Button
							w='100%'
							borderRadius='0'
							variant='ghost'
							rightIcon={getSortIcon()}
							onClick={header.column.getToggleSortingHandler()}>
							{flexRender(
								header.column.columnDef.header,
								header.getContext(),
							)}
						</Button>
					</Th>
				)
			})}
		</Tr>
	)
}
