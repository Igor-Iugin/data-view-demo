import {FC} from 'react'

import {TheadRowProps} from './TheadRow-props'
import {DragHandleIcon, TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'
import {Button, Checkbox, IconButton, Th, Tr} from '@chakra-ui/react'
import {flexRender} from '@tanstack/react-table'


export const TheadRow: FC<TheadRowProps> = ({table, group}) => {
	return (
		<Tr>
			<Th p='0' minW='60px'>
				<Checkbox
					isChecked={table.getIsAllRowsSelected()}
					isIndeterminate={table.getIsSomeRowsSelected()}
					onChange={table.getToggleAllRowsSelectedHandler()}
					justifyContent='center'
					h='40px'
					w='100%'
				/>
			</Th>
			<Th p='0' minW='60px'>
				<IconButton
					variant='unstyled'
					cursor='default'
					display='flex'
					m='0 auto'
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
