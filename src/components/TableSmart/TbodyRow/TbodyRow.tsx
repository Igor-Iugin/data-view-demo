import {FC} from 'react'

import {TbodyRowProps} from './TbodyRow-props'
import {Checkbox, IconButton, Td, Tr} from '@chakra-ui/react'
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
			<Td p='0' w='60px'>
				<Checkbox
					isChecked={row.getIsSelected()}
					onChange={row.getToggleSelectedHandler()}
					justifyContent='center'
					h='53px'
					w='100%'
				/>
			</Td>
			<Td ref={dropRef} p='0' h='53px'>
				<IconButton
					cursor='grab'
					display='flex'
					m='0 auto'
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
