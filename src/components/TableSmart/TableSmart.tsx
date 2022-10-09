import {FC, useMemo, useState} from 'react'

import {Table, TableContainer, Tbody, Thead} from '@chakra-ui/react'

import {TableSmartProps} from './TableSmart-props'
import {OrgData} from '../../interfaces/table/OrgData'
import {
	CellContext,
	ColumnDefTemplate,
	ColumnFiltersState,
	createColumnHelper,
	FilterFn,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import {rankItem} from '@tanstack/match-sorter-utils'
import {TData} from '../../interfaces/table'
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {TheadRow} from './TheadRow'
import {TbodyRow} from './TbodyRow'
import {Controls} from './Controls'

const fuzzyFilterFunc: FilterFn<any> = (row, columnId, value, addMeta) => {
	const itemRank = rankItem(row.getValue(columnId), value)
	addMeta({itemRank})
	return itemRank.passed
}
const defaultData: OrgData[] = [
	{
		designation: 'АО ЧМЗ',
		name: 'АО ЧМЗ',
		city: 'г. Глазов',
		address: null,
		contact: null,
		phone: null,
		note: null,
	},
	{
		designation: 'ФАУ ГГЭ',
		name: 'ФАУ Главносэкспертиза',
		city: null,
		address: null,
		contact: 'Манылов',
		phone: null,
		note: null,
	},
	{
		designation: 'АААААУ ГГЭ',
		name: 'ФАУ Главносэкспертиза',
		city: null,
		address: null,
		contact: 'Манылов',
		phone: null,
		note: null,
	},
	{
		designation: 'АААААУ ГГЭ',
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

export const TableSmart: FC<TableSmartProps> = () => {
	const [tbody] = useAutoAnimate<HTMLTableSectionElement>()

	const [data, setData] = useState<OrgData[]>(defaultData)
	const reorderRow = (draggedRow: number, targetRow: number) => {
		data.splice(targetRow, 0, data.splice(draggedRow, 1)[0] as OrgData)
		setData([...data])
	}

	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [globalFilter, setGlobalFilter] = useState('')
	const [rowSelection, setRowSelection] = useState({})
	const fuzzyFilter = useMemo(() => fuzzyFilterFunc, [])

	const table = useReactTable({
		data,
		columns,
		filterFns: {
			fuzzy: fuzzyFilter,
		},
		state: {
			columnFilters,
			globalFilter,
			rowSelection,
		},
		onColumnFiltersChange: setColumnFilters,
		onGlobalFilterChange: setGlobalFilter,
		onRowSelectionChange: setRowSelection,
		globalFilterFn: fuzzyFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
	})

	return (
		<TableContainer display='grid' gap='6'>
			{/*@ts-ignore*/}
			<Controls {...{columns, table}}/>
			<Table>
				<Thead>
					{table.getHeaderGroups().map(group => (
						<TheadRow key={group.id} table={table} group={group}/>
					))}
				</Thead>
				<Tbody ref={tbody}>
					{table.getRowModel().rows.map(row => (
						<TbodyRow key={row.id} row={row} reorder={reorderRow}/>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}
