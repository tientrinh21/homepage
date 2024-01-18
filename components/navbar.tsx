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
import { Link, LinkProps } from '@chakra-ui/next-js'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ReactNode, use } from 'react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'
import React from 'react'
import { IoLogoGithub } from 'react-icons/io5'

type LinkItemProps = LinkProps & {
	href: string
	path: string
	children: ReactNode
}

const LinkItem = ({ href, path, children, ...props }: LinkItemProps) => {
	const active = path === href
	const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')

	return (
		<Link
			href={href}
			p={2}
			fontWeight="medium"
			bg={active ? useColorModeValue('teal.500', 'teal.200') : undefined}
			color={active ? useColorModeValue('#f0e7db', '#202023') : inactiveColor}
			borderRadius="lg"
			{...props}
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
			w="full"
			pt={2}
			bg={useColorModeValue('#ffffff40', '#20202380')}
			backdropFilter="auto"
			backdropBlur="10px"
			zIndex={1}
			scrollBehavior="auto"
		>
			<Container display="flex" py={2} w="container.lg" maxW="95%" flexWrap="wrap">
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
					<LinkItem
						href="https://github.com/tientrinh21/homepage"
						path={path}
						isExternal
						display="flex"
						alignItems="center"
						style={{ gap: 7 }}
					>
						<IoLogoGithub size={20} />
						Source
					</LinkItem>
				</Stack>

				{/* With Flex and Spacer, the children will span the entire width of the container */}
				<Spacer />

				<ThemeToggleButton />
				<Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
					<Menu>
						<MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />

						<MenuList>
							<MenuItem as={Link} href="/">
								Home
							</MenuItem>
							<MenuItem as={Link} href="/works">
								Works
							</MenuItem>
							<MenuItem as={Link} href="https://github.com/tientrinh21/homepage" isExternal>
								Source
								<IoLogoGithub size={20} style={{ marginLeft: '7px' }} />
							</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Container>
		</Box>
	)
}

export default NavBar
