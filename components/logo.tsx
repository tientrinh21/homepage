'use client'

import { Link } from '@chakra-ui/next-js'
import { Heading, Text, useColorModeValue, Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

// Lazy load with no server-side
const ComputerIcon = dynamic(() => import('./icons/computer'), { ssr: false })

const LogoBox = ({ children }: { children: ReactNode }) => (
	<Box
		fontWeight="bold"
		fontSize="lg"
		display="inline-flex"
		alignItems="center"
		h={10}
		lineHeight="shorter"
		px={2.5}
		py={1.5}
		gap={1.5}
	>
		{children}
	</Box>
)

const Logo = () => {
	return (
		<Heading as="h1" size="lg" letterSpacing="tight" display="flex" alignItems="flex-end" mr={5}>
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
