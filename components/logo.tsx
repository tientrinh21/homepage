'use client'

import { Link } from '@chakra-ui/next-js'
import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
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
		<Heading
			as="h1"
			size="lg"
			letterSpacing="tight"
			display="flex"
			alignItems="flex-end"
			mr={5}
		>
			<Link href="/" scroll={false}>
				<LogoBox>
					<ComputerIcon />
					<Text
						color={useColorModeValue('gray.800', 'whiteAlpha.900')}
						fontFamily="M PLUS Rounded 1c, sans-serif"
						fontWeight="bold"
						ml={0.5}
					>
						Tien Trinh
					</Text>
				</LogoBox>
			</Link>
		</Heading>
	)
}

export default Logo
