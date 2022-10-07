import {FC, useState} from 'react'

import {Button, ButtonProps, Center, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'

import {TableSmartProps} from './TableSmart-props'
import {OrgData} from '../../interfaces/table/OrgData'
import {
	CellContext,
	ColumnDefTemplate,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table'
import {TData} from '../../interfaces/table'
import {TriangleDownIcon, TriangleUpIcon} from '@chakra-ui/icons'
import {useAutoAnimate} from '@formkit/auto-animate/react'


const data: OrgData[] = [
	{
		checked: false,
		designation: 'АО ЧМЗ',
		name: 'АО ЧМЗ',
		city: 'г. Глазов',
		address: null,
		contact: null,
		phone: null,
		note: null,
	},
	{
		checked: false,
		designation: 'ФАУ ГГЭ',
		name: 'ФАУ Главносэкспертиза',
		city: null,
		address: null,
		contact: 'Манылов',
		phone: null,
		note: null,
	},
]
const colHelper = createColumnHelper<OrgData>()
const getColValue: ColumnDefTemplate<CellContext<OrgData, TData<string>>> = i => i.getValue() === null ? '–' : i.getValue()
const columns = [
	colHelper.accessor('checked', {
		header: ({table}) => (
			<Center
				as={Checkbox}
				isChecked={table.getIsAllRowsSelected()}
				isIndeterminate={table.getIsSomeRowsSelected()}
				onChange={table.getToggleAllRowsSelectedHandler()}
				h='100%'
			/>
		),
		cell: ({row}) => (
			<Center
				as={Checkbox}
				isChecked={row.getIsSelected()}
				onChange={row.getToggleSelectedHandler()}
				h='100%'
			/>
		),
	}),
	colHelper.accessor('designation', {
		header: 'Обозначение',
		cell: getColValue,
	}),
	colHelper.accessor('name', {
		header: 'Наименование',
		cell: getColValue,
	}),
	colHelper.accessor('city', {
		header: 'Город',
		cell: getColValue,
	}),
	colHelper.accessor('address', {
		header: 'Адрес',
		cell: getColValue,
	}),
	colHelper.accessor('contact', {
		header: 'Контакт',
		cell: getColValue,
	}),
	colHelper.accessor('phone', {
		header: 'Телефон',
		cell: getColValue,
	}),
	colHelper.accessor('note', {
		header: 'Примечание',
		cell: getColValue,
	}),
]

const TableHeader = (props: ButtonProps) => (
	<Button
		w='100%'
		borderRadius='0'
		variant='ghost'
		{...props}
	/>
)
export const TableSmart: FC<TableSmartProps> = () => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [rowSelection, setRowSelection] = useState({})
	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			rowSelection,
		},
		onRowSelectionChange: setRowSelection,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	})

	const [tbody] = useAutoAnimate<HTMLTableSectionElement>()

	return (
		<TableContainer>
			<Table>
				<Thead>
					{table.getHeaderGroups().map(group => (
						<Tr key={group.id}>
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
										<TableHeader
											rightIcon={getSortIcon()}
											onClick={header.column.getToggleSortingHandler()}>
											{flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
										</TableHeader>
									</Th>
								)
							})}
						</Tr>
					))}
				</Thead>
				<Tbody ref={tbody}>
					{table.getRowModel().rows.map(row => (
						<Tr key={row.id}>
							{row.getVisibleCells().map(cell => (
								<Td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</Td>
							))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
