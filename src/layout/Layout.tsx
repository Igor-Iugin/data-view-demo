import { FC } from 'react'

import { Container, Grid } from '@chakra-ui/react'
import { Header } from './Header'
import { Footer } from './Footer'

import { LayoutProps } from './Layout-props'


export const Layout: FC<LayoutProps> = ({children}) => {
	return (
		<Grid minH={'100vh'} gridTemplateRows={'max-content 1fr'}>
			<Header/>
			<Container maxW={'90%'}>{children}</Container>
			<Footer/>
		</Grid>
	)
}
