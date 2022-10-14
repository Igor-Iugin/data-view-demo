import {FC} from 'react'

import {LoginProps} from './Login-props'
import {useLocation, useNavigate} from 'react-router'
import {useAuth} from '../../Auth'
import Logo from '../../assets/images/PSR-logo.png'
import {
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	Grid,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react'
import {SubmitHandler, useForm} from 'react-hook-form'
import {IUser} from '../../interfaces/IUser'
import {AtSignIcon, LockIcon} from '@chakra-ui/icons'
import {useAutoAnimate} from '@formkit/auto-animate/react'


export const Login: FC<LoginProps> = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const auth = useAuth()

	const [logRef] = useAutoAnimate<HTMLDivElement>()
	const [passRef] = useAutoAnimate<HTMLDivElement>()

	const from = location.state?.from?.pathname || '/'

	const {register, handleSubmit, formState: {errors}} = useForm<IUser>({
		defaultValues: {
			userName: auth.user?.userName,
			password: auth.user?.password
		}
	})
	const onSubmit: SubmitHandler<IUser> = data => {
		auth.signin(data, () => {
			// Send them back to the page they tried to visit when they were
			// redirected to the login page. Use { replace: true } so we don't create
			// another entry in the history stack for the login page.  This means that
			// when they get to the protected page and click the back button, they
			// won't end up back on the login page, which is also really nice for the
			// user experience.
			navigate(from, {replace: true})
		})
	}

	return (
		<Center h='100vh'>
			<Grid maxW='sm' borderWidth='1px' borderRadius='lg' p={8} gap={8} minW='420px'>
				<Grid placeItems='center' gap={2}>
					<Image src={Logo} alt='Система управления проектами ПСР' w='250px'/>
					<Heading as='h1' size='lg' textAlign='center'>Система управления проектами ПСР</Heading>
				</Grid>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid gap={4}>
						<FormControl isInvalid={!!errors.userName?.message} ref={logRef}>
							<InputGroup>
								<InputLeftElement>
									<AtSignIcon/>
								</InputLeftElement>
								<Input
									placeholder='Пользователь'
									{...register('userName', {required: 'Обязательное поле'})}
									type='text'
								/>
							</InputGroup>
							<FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.password?.message} ref={passRef}>
							<InputGroup>
								<InputLeftElement>
									<LockIcon/>
								</InputLeftElement>
								<Input
									placeholder='Пароль'
									{...register('password', {required: 'Обязательное поле'})}
									type='password'
								/>
							</InputGroup>
							<FormErrorMessage>{errors.userName?.message}</FormErrorMessage>
						</FormControl>

						<Button colorScheme='blue' type='submit'>Войти</Button>
					</Grid>
				</form>
			</Grid>
		</Center>
	)
}
