import {createContext, FC, useContext} from 'react'

import {ProjectProps} from './Project-props'
import {Grid} from '@chakra-ui/react'
import {IProject} from '../../mocks/mockProjects'
import {PHeader} from './PHeader'
import {StyledGantt} from './StyledGantt'


const ProjectContext = createContext<IProject>(null!)

export const Project: FC<ProjectProps> = ({data}) => {
	return (
		<ProjectContext.Provider value={data}>
			<Grid gap={4}>
				<PHeader/>
				<StyledGantt tasks={data.tasks}/>
			</Grid>
		</ProjectContext.Provider>
	)
}

export const useProject = () => useContext(ProjectContext)
