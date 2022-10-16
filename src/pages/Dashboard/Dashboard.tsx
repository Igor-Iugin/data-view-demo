import {FC, useMemo, useState} from 'react'

import {DashboardProps} from './Dashboard-props'
import {Stack, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react'
import {Project} from '../../components'
import {mockProjects} from '../../mocks/mockProjects'


export const Dashboard: FC<DashboardProps> = () => {
	const [tabIndex, setTabIndex] = useState<number>(0)
	const onTabChange = (index: number) => setTabIndex(index)
	const projects = useMemo(() => mockProjects, [])

	return (
		<Tabs index={tabIndex} onChange={onTabChange}>
			<TabList>
				{projects.map(project => <Tab key={project.name}>{project.name}</Tab>)}
			</TabList>

			<TabPanels pt={4}>
				{projects.map(project => (
					<Stack key={project.name} as={TabPanel} dir='column' spacing={6}>
						{project.projects.map(project => (
							<Project key={project.name} data={project}/>
						))}
					</Stack>
				))}
			</TabPanels>
		</Tabs>
	)
}
