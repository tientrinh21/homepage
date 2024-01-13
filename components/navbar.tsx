'use client'

import {
	Container,
	Box,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Player } from '@lordicon/react'
import { ReactNode } from 'react'
import Logo from './logo'

const LinkItem = ({
	href,
	path,
	children,
}: {
	href: string
	path: string
	children: ReactNode
}) => {
	const active = path === href
	const inActiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

	return (
		<Link
			href={href}
			p={2}
			bg={active ? 'glassTeal' : undefined}
			color={active ? '#202023' : inActiveColor}
		>
			{children}
		</Link>
	)
}

const NavBar = (props: { path: string }) => {
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue('#ffffff40', '#20202380')}
			backdropFilter="auto"
			backdropBlur="10px"
			zIndex={1}
			{...props}
		>
			<Container
				display="flex"
				p={2}
				maxW="md"
				flexWrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing="tighter">
						<Logo />
					</Heading>
				</Flex>
			</Container>
		</Box>
	)
}

export default NavBar
