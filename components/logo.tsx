'use client'

import { Link } from '@chakra-ui/next-js'
import { Container, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import ComputerIcon from './icons/computer'

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
					fontFamily="M PLUS Rounded 1c, sans-serif"
					fontWeight="bold"
					letterSpacing={0.125}
					ml={0.25}
				>
					Tien Trinh
				</Text>
			</LogoBox>
		</Link>
	)
}

export default Logo
