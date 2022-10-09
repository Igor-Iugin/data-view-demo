import {FC} from 'react'

import {TableModalProps} from './TableModal-props'
import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {TableState} from '@tanstack/react-table'


export const TableModal: FC<TableModalProps> = ({isOpen, onClose, columns, table}) => {
	const {register, handleSubmit} = useForm()

	const onSubmit: SubmitHandler<any> = data => {
		let result: Record<string, unknown> = {}
		for (let key in data) {
			const target = data[key]
			if (target === '') {
				return result[key] = null
			} else {
				result[key] = target
			}
		}
		table.setState(result as TableState)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay/>
			<ModalContent>
				<ModalHeader>Добавить запись</ModalHeader>
				<ModalCloseButton/>
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalBody display='grid' gap='5'>
						{columns.map(column => (
							<FormControl key={column.accessorKey} id={column.accessorKey}>
								<FormLabel>{column.header}</FormLabel>
								<Input {...register(column.accessorKey)}/>
							</FormControl>
						))}
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' type='submit'>Сохранить</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	)
}
