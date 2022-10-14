import {createContext, FC, useContext} from 'react'

import {ProjectProps} from './Project-props'
import {Flex} from '@chakra-ui/react'
import {IProject} from '../../mocks/mockProjects'
import {PHeader} from './PHeader'
import {StyledGantt} from './StyledGantt'


const ProjectContext = createContext<IProject>(null!)

export const Project: FC<ProjectProps> = ({data}) => {
	return (
		<ProjectContext.Provider value={data}>
			<Flex flexDir='column' gap={6}>
				<PHeader/>
				<StyledGantt tasks={data.tasks}/>
			</Flex>
		</ProjectContext.Provider>
	)
}

export const useProject = () => useContext(ProjectContext)
