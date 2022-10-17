import {createContext, Dispatch, FC, SetStateAction, useContext, useState} from 'react'

import {ProjectProps} from './Project-props'
import {Flex, useColorMode, useDisclosure} from '@chakra-ui/react'
import {IProject} from '../../mocks/mockProjects'
import {PHeader} from './PHeader'
import {StyledGantt} from '../'
import {PModal} from './PModal'
import {Task} from 'gantt-task-react'
import {getTaskColor} from '../StyledGantt/utils/getTaskColor'


const ProjectContext = createContext<IProject & {
	onOpen: Dispatch<SetStateAction<boolean>>
	setTasks: Dispatch<SetStateAction<Task[]>>
}>(null!)


export const Project: FC<ProjectProps> = ({data}) => {
	const [tasks, setTasks] = useState<Task[]>(data.tasks.map(task => getTaskColor(task)))
	const {isOpen, onOpen, onClose} = useDisclosure()
	const {colorMode} = useColorMode()
	const bdColor = colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.300'
	return (
		<ProjectContext.Provider value={{...data, tasks, setTasks, onOpen}}>
			<Flex flexDir='column' gap={6} border='1px solid' borderColor={bdColor} borderRadius='md' px={5} py={5}>
				<PHeader/>
				<StyledGantt tasks={tasks}/>
			</Flex>
			<PModal isOpen={isOpen} onClose={onClose}/>
		</ProjectContext.Provider>
	)
}

export const useProject = () => useContext(ProjectContext)
