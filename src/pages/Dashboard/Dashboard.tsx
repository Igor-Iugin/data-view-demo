import {FC} from 'react'

import {DashboardProps} from './Dashboard-props'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import {Project} from '../../components'


export const Dashboard: FC<DashboardProps> = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>АСО</Tab>
			</TabList>

			<TabPanels pt={2}>
				<TabPanel border='1px solid' borderColor='whiteAlpha.200' borderRadius='md'>
					<Project/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}
