import {FC} from 'react'

import {Center} from '@chakra-ui/react'

import {FooterProps} from './Footer-props'


export const Footer: FC<FooterProps> = () => {
	return (
		<Center as={'footer'} gap={2} p={3}>
		</Center>
	)
}
