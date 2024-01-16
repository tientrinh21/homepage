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
	Spacer,
	MenuButton,
	IconButton,
	useColorModeValue,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

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
			bg={active ? 'teal.300' : undefined}
			color={active ? '#202023' : inactiveColor}
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
			mt={2}
			bg={useColorModeValue('#ffffff40', '#20202380')}
			backdropFilter="auto"
			backdropBlur="10px"
			zIndex={1}
		>
			<Container display="flex" p={2} maxW="container.md" flexWrap="wrap">
				<Logo />
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					w={{ base: 'full', md: 'auto' }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
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
