import {FC} from 'react'

import {TbodyRowProps} from './TbodyRow-props'
import {Center, Checkbox, IconButton, Td, Tr} from '@chakra-ui/react'
import {flexRender, Row} from '@tanstack/react-table'
import {useDrag, useDrop} from 'react-dnd'
import {DragHandleIcon} from '@chakra-ui/icons'


export const TbodyRow: FC<TbodyRowProps> = ({row, reorder}) => {
	const [, dropRef] = useDrop({
		accept: 'row',
		drop: (draggedRow: Row<any>) => reorder(draggedRow.index, row.index),
	})
	const [, dragRef, bodyRef] = useDrag({
		type: 'row',
		item: () => row,
	})
	return (
		<Tr ref={bodyRef}>
			<Td>
				<Center
					as={Checkbox}
					isChecked={row.getIsSelected()}
					onChange={row.getToggleSelectedHandler()}
					h='100%'
				/>
			</Td>
			<Td ref={dropRef}>
				<IconButton
					cursor='grab'
					ref={dragRef}
					icon={<DragHandleIcon/>}
					aria-label='Перенести'/>
			</Td>
			{row.getVisibleCells().map(cell => (
				<Td key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</Td>
			))}
		</Tr>
	)
}
