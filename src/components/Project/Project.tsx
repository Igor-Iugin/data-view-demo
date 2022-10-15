import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'

import {ProjectProps} from './Project-props'
import {Flex, useDisclosure} from '@chakra-ui/react'
import {IProject} from '../../mocks/mockProjects'
import {PHeader} from './PHeader'
import {StyledGantt} from './StyledGantt'
import {PModal} from './PModal'
import {Task} from 'gantt-task-react'


const ProjectContext = createContext<IProject & {
	onOpen: Dispatch<SetStateAction<boolean>>
	setTasks: Dispatch<SetStateAction<Task[]>>
}>(null!)

export const Project: FC<ProjectProps> = ({data}) => {
	const [tasks, setTasks] = useState<Task[]>(data.tasks)
	const {isOpen, onOpen, onClose} = useDisclosure()
	return (
		<ProjectContext.Provider value={{...data, tasks, setTasks, onOpen}}>
			<Flex flexDir='column' gap={6}>
				<PHeader/>
				<StyledGantt tasks={tasks}/>
			</Flex>
			<PModal isOpen={isOpen} onClose={onClose}/>
		</ProjectContext.Provider>
	)
}

export const useProject = () => useContext(ProjectContext)
