import {FC, useMemo, useState} from 'react'

import {DashboardProps} from './Dashboard-props'
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import {Project} from '../../components'
import {mockProjects} from '../../mocks/mockProjects'


export const Dashboard: FC<DashboardProps> = () => {
	const [tabIndex, setTabIndex] = useState<number>(0)
	const onTabChange = (index: number) => setTabIndex(index)

	const projects = useMemo(() => mockProjects, [])

	return (
		<Tabs index={tabIndex} onChange={onTabChange}>
			<TabList>
				{projects.map(project => <Tab key={project.name}>АСО</Tab>)}
			</TabList>

			<TabPanels pt={2}>
				{projects[tabIndex].projects.map(project => (
					<TabPanel key={project.name} border='1px solid' borderColor='whiteAlpha.200' borderRadius='md'>
						<Project data={project}/>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	)
}
