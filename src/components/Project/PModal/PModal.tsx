import {FC} from 'react'

import {PModalProps} from './PModal-props'
import {
	Flex, Kbd,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	Tab,
	TabList, TabPanel,
	TabPanels,
	Tabs
} from '@chakra-ui/react'
import {useProject} from '../Project'
import {PCard} from './PCard'
import {PPlan} from './PPlan'
import {PKPI} from './PKPI'
import {CloseIcon} from '@chakra-ui/icons'


export const PModal: FC<PModalProps> = (props) => {
	const {name} = useProject()
	return (
		<Modal size='full' {...props}>
			<ModalContent>
				<Flex as={ModalCloseButton} gap={4} justifyContent='end'>
					<span><Kbd>Esc</Kbd></span>
					<CloseIcon mr='10px'/>
				</Flex>
				<ModalHeader>{name}</ModalHeader>

				<ModalBody>
					<Tabs>
						<TabList>
							<Tab>Карточка проекта</Tab>
							<Tab>План график</Tab>
							<Tab>Динамика KPI</Tab>
						</TabList>
						<TabPanels>
							<TabPanel><PCard/></TabPanel>
							<TabPanel><PPlan/></TabPanel>
							<TabPanel><PKPI/></TabPanel>
						</TabPanels>
					</Tabs>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
