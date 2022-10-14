import {createContext, Dispatch, FC, SetStateAction, useContext} from 'react'

import {ProjectProps} from './Project-props'
import {Flex, useDisclosure} from '@chakra-ui/react'
import {IProject} from '../../mocks/mockProjects'
import {PHeader} from './PHeader'
import {StyledGantt} from './StyledGantt'
import {PModal} from './PModal'


const ProjectContext = createContext<IProject & { onOpen: Dispatch<SetStateAction<boolean>> }>(null!)

export const Project: FC<ProjectProps> = ({data}) => {
	const {isOpen, onOpen, onClose} = useDisclosure()
	return (
		<ProjectContext.Provider value={{...data, onOpen}}>
			<Flex flexDir='column' gap={6}>
				<PHeader/>
				<StyledGantt tasks={data.tasks}/>
			</Flex>
			<PModal isOpen={isOpen} onClose={onClose}/>
		</ProjectContext.Provider>
	)
}

export const useProject = () => useContext(ProjectContext)
