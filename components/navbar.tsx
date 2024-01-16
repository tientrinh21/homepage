'use client'

import {
	Container,
	Box,
	Stack,
	Menu,
	MenuItem,
	MenuList,
	Spacer,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ReactNode, use } from 'react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import React from 'react'

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
	const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

	return (
		<Link
			href={href}
			p={2}
			fontWeight="medium"
			bg={active ? useColorModeValue('teal.500', 'teal.200') : undefined}
			color={
				active ? useColorModeValue('#f0e7db', '#202023') : inactiveColor
			}
			borderRadius="lg"
		>
			{children}
		</Link>
	)
}

const NavBar = ({ path }: { path: string }) => {
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			pt={2}
			bg={useColorModeValue('#ffffff40', '#20202380')}
			backdropFilter="auto"
			backdropBlur="10px"
			zIndex={1}
		>
			<Container
				display="flex"
				py={2}
				w="container.md"
				maxW="95%"
				flexWrap="wrap"
			>
				<Logo />
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					w={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
				>
					<LinkItem href="/" path={path}>
						Home
					</LinkItem>
					<LinkItem href="/works" path={path}>
						Works
					</LinkItem>
				</Stack>

				{/* With Flex and Spacer, the children will span the entire width of the container */}
				<Spacer />

				<ThemeToggleButton />
				<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
					<Menu>
						<MenuButton
							as={IconButton}
							icon={<HamburgerIcon />}
							variant="outline"
							aria-label="Options"
						/>

						<MenuList>
							<MenuItem as={Link} href="/">
								Home
							</MenuItem>
							<MenuItem as={Link} href="/works">
								Works
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Container>
		</Box>
	)
}

export default NavBar
