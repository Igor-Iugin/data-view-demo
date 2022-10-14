import { FC } from 'react'

import { Container, Grid } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

import { LayoutProps } from './Layout-props'
import {Outlet} from 'react-router'


export const Layout: FC<LayoutProps> = () => {
	return (
		<Grid minH={'100vh'} gap='20' gridTemplateRows={'max-content 1fr'}>
			<Header/>
			<Container as='main' maxW='90vw'><Outlet/></Container>
			<Footer/>
		</Grid>
	)
}
