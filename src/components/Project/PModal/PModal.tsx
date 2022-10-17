import {FC} from 'react'

import {PModalProps} from './PModal-props'
import {
	Box,
	Flex,
	Kbd,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs
} from '@chakra-ui/react'
import {useProject} from '../Project'
import {PCard} from './PCard'
import {PPlan} from './PPlan'
import {CloseIcon} from '@chakra-ui/icons'
import {ChartJSBarKPI, ChartJSKPI} from '../../ChartJSKPI'


export const PModal: FC<PModalProps> = (props) => {
	const {
		name: pName,
		plannedEffect: {
			data,
			initialValue,
			aimedValue,
			name,
			units
		}
	} = useProject()
	const barData = {
		name,
		units,
		data: [
			{y: initialValue},
			{y: aimedValue}
		]
	}
	return (
		<Modal size='full' {...props}>
			<ModalContent>
				<Flex as={ModalCloseButton} gap={4} justifyContent='end'>
					<span><Kbd>Esc</Kbd></span>
					<CloseIcon mr='10px'/>
				</Flex>
				<ModalHeader>{pName}</ModalHeader>

				<ModalBody>
					<Tabs>
						<TabList>
							<Tab>Карточка проекта</Tab>
							<Tab>План график</Tab>
							<Tab>Динамика KPI</Tab>
							<Tab>Ресурсное планирование</Tab>
						</TabList>
						<TabPanels>
							<TabPanel><PCard/></TabPanel>
							<TabPanel><PPlan/></TabPanel>
							<TabPanel>
								<SimpleGrid columns={2} gap={10}>
									<Box h='500px'>
										<ChartJSBarKPI data={barData}/>
									</Box>
								</SimpleGrid>
							</TabPanel>
							<TabPanel>
								<SimpleGrid columns={2} gap={10}>
									<Box h='500px'>
										<ChartJSKPI data={data}/>
									</Box>
								</SimpleGrid>
							</TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
