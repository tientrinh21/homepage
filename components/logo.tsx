import { Link } from '@chakra-ui/next-js'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import ComputerIcon from './icons/computer'
import { ReactNode } from 'react'

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 18px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;
	gap: 5px;
`

const Logo = () => {
	return (
		<Link href="/" scroll={false}>
			<LogoBox>
				<ComputerIcon />
				<Text
					color={useColorModeValue('gray.800', 'whiteAlpha.900')}
					fontFamily='M PLUS Rounded 1c", sans-serif'
					fontWeight="bold"
				>
					Tien Trinh
				</Text>
			</LogoBox>
		</Link>
	)
}

export default Logo
